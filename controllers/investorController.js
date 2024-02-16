const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 5; // Number of items per page

const getAllInvestors = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    try {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const totalCount = await prisma.investor.count({});
        const investors = await prisma.investor.findMany({
            skip: startIndex,
            take: ITEMS_PER_PAGE
        });
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        res.status(200).json({ investors, totalPages });
    } catch (error) {
        console.error('Error fetching all investors', error);
        res.status(500).send('Error fetching all investors');
    }
}

const getInvestorFundedStartups = async (req, res) => {
    try {
        const { investorId } = parseInt(req.params);
        const fundedStartups = await prisma.investments.findMany({
            where: {
                investorId: investorId,
                status: true,
            },
            select: {
                investorId: true,
                amount: true,
                startup: {
                    select: {
                        id: true,
                        name: true,
                        sector: true,
                        marketCap: true,
                        activeYears: true,
                        region: true,
                        numberOfInvestors: true,
                        longitude: true,
                        latitude: true
                    },
                },
            },
            orderBy: {
                amount: 'asc',
            },
        });
        res.status(200).json(fundedStartups);
    } catch (error) {
        // Handle error
        console.error('Error fetching funded startups:', error);
        throw error;
    }
};

const getInvestorFundingRequests = async (req, res) => {
    try {
        const investorId = parseInt(req.params.investorId);
        const fundingRequests = await prisma.investments.findMany({
            where: {
                investorId: investorId,
                status: false,
            },
            select: {
                investorId: true,
                amount: true,
                startup: {
                    select: {
                        id: true,
                        name: true,
                        sector: true,
                        marketCap: true,
                        activeYears: true,
                        region: true,
                        numberOfInvestors: true,
                        longitude: true,
                        latitude: true
                    },
                },
            },
            orderBy: {
                amount: 'asc',
            },
        });
        res.status(200).json(fundingRequests);
    } catch (error) {
        // Handle error
        console.error('Error fetching funded startups:', error);
        throw error;
    }
};

const postInvestor = async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber, city, zipCode, adresse, description } = req.body

    const existingUser = await prisma.investor.findUnique({
        where: {
            email: email
        }
    })

    if (existingUser) {
        return res.status(400).json({
            error: 'Un seul compte par adresse email'
        })
    }

    else if (password.length < 3) {
        return res.status(400).json({
            error: 'password less than 3 characters'
        })
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const investor = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        hashedPassword: passwordHash,
        phoneNumber: phoneNumber,
        city: city,
        zipCode: zipCode,
        adresse: adresse,
        description: description,
    }

    const savedInvestor = await prisma.investor.create({
        data: investor
    })

    res.status(201).json(savedInvestor)

}

const loginInvestor = async (req, res) => {

    const { email, password } = req.body

    const investor = await prisma.investor.findUnique({
        where: {
            email: email
        }
    })

    const passwordCorrect = investor === null
        ? false
        : await bcrypt.compare(password, investor.hashedPassword)

    if (!(investor && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const investorWithoutPass = {
        id: investor.id,
        firstName: investor.firstName,
        lastName: investor.lastName,
        phoneNumber: investor.phoneNumber,
        city: investor.city,
        zipCode: investor.zipCode,
        adresse: investor.adresse,
        description: investor.description,
        email: investor.email,
    }

    const investorForToken = {
        id: investor.id,
        email: investor.email,
    }

    const token = jwt.sign(investorForToken, process.env.SECRET)

    res
        .status(200)
        .send({ token, investorWithoutPass })
}


module.exports = {
    getAllInvestors,
    getInvestorFundedStartups,
    getInvestorFundingRequests,
    postInvestor,
    loginInvestor
};