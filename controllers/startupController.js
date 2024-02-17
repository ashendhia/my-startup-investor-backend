const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const ITEMS_PER_PAGE = 100; // Number of items per page

const getAllStartups = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    try {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const totalCount = await prisma.startup.count({});
        const startups = await prisma.startup.findMany({
            skip: startIndex,
            take: ITEMS_PER_PAGE
        });
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        res.status(200).json({ startups, totalPages });
    } catch (error) {
        console.error('Error fetching all startups', error);
        res.status(500).send('Error fetching all startups');
    }
}

const getStartupsBySector = async (req, res) => {
    const { sector } = req.params;
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    try {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const totalCount = await prisma.startup.count({
            where: {
                sector: sector
            }
        });
        const startups = await prisma.startup.findMany({
            where: {
                sector: sector
            },
            skip: startIndex,
            take: ITEMS_PER_PAGE
        });
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        res.status(200).json({ startups, totalPages });
    } catch (error) {
        console.error('Error fetching statups for this sector', error);
        res.status(500).send('Error fetching statups for this sector');
    }
};

const getStartupsByName = async (req, res) => {
    const { name } = req.query;
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    try {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const totalCount = await prisma.startup.count({
            where: {
                name: {
                    contains: name
                }
            }
        });
        const startups = await prisma.startup.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            skip: startIndex,
            take: ITEMS_PER_PAGE
        });
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        res.status(200).json({ startups, totalPages });
    } catch (error) {
        console.error('Error fetching startups by name:', error);
        res.status(500).send('Error fetching startups by name');
    }
};

const getStartupDistinctSectors = async (req, res) => {
    try {
        const distinctSectors = await prisma.startup.findMany({
            distinct: ['sector'],
            select: {
                sector: true
            }
        });

        let result = distinctSectors.map(entry => entry.sector);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching distinct sectors:', error);
        throw error;
    }
}

const getStartupFundingInvestors = async (req, res) => {
    try {
        const startupId = parseInt(req.params.startupId);
        const fundingInvestors = await prisma.investments.findMany({
            where: {
                startupId: startupId,
                status: true,
            },
            select: {
                startupId: true,
                amount: true,
                investor: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phoneNumber: true,
                        city: true,
                        zipCode: true,
                        adresse: true,
                        description: true,
                    },
                },
            },
            orderBy: {
                amount: 'asc',
            },
        });
        res.status(200).json(fundingInvestors);
    } catch (error) {
        // Handle error
        console.error('Error fetching investors', error);
        throw error;
    }
};

const postStartup = async (req, res) => {
    const { name, sector, marketCap, activeYears, region, numberOfInvestors, longitude, latitude, email, password } = req.body

    const existingUser = await prisma.startup.findUnique({
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

    const startup = {
        name,
        sector,
        marketCap,
        activeYears,
        region,
        numberOfInvestors,
        longitude,
        latitude,
        email,
        hashedPassword: passwordHash
    }

    const savedStartup = await prisma.startup.create({
        data: startup
    })

    res.status(201).json(savedStartup)

}

const loginStartup = async (req, res) => {

    const { email, password } = req.body

    const startup = await prisma.startup.findUnique({
        where: {
            email: email
        }
    })

    const passwordCorrect = startup === null
        ? false
        : await bcrypt.compare(password, startup.hashedPassword)

    if (!(startup && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const startupWithoutPass = {
        id: startup.id,
        name: startup.name,
        email: startup.email,
        sector: startup.sector,
        marketCap: startup.marketCap,
        activeYears: startup.activeYears,
        region: startup.region,
        numberOfInvestors: startup.numberOfInvestors,
        longitude: startup.longitude,
        latitude: startup.latitude,
    }

    const startupForToken = {
        id: startup.id,
        email: startup.email,
    }

    const token = jwt.sign(startupForToken, process.env.SECRET)

    res
        .status(200)
        .send({ token, startupWithoutPass })
}

module.exports = {
    getAllStartups,
    getStartupsBySector,
    getStartupsByName,
    getStartupDistinctSectors,
    getStartupFundingInvestors,
    postStartup,
    loginStartup
};  
