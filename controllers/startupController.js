const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 100; // Number of items per page

const getAllStartups = async (req,res)=> {
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

const getStartupDistinctSectors =  async(req,res) => {
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

module.exports = {
    getAllStartups,
    getStartupsBySector,
    getStartupsByName,
    getStartupDistinctSectors,
    getStartupFundingInvestors
};  
