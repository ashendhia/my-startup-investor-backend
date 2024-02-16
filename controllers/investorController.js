const { PrismaClient } = require('@prisma/client');
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

const getInvestorFundedStartups = async (req,res) => {
    try {
        const {investorId} = parseInt(req.params);
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

const getInvestorFundingRequests = async (req,res) => {
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

module.exports = {
    getAllInvestors,
    getInvestorFundedStartups,
    getInvestorFundingRequests
};