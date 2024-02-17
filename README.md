#This the server for our platform it supports the functionalities destined for the investors as well as startups
#To launch this server sucessfully we recommend the following steps (we suppose that the project is fully local and nothing is deployed, of course if the project is deployed it is as simple as clocking a link): 
1- clone the repository into your local machine 
2- run the command npm i to install the necessary packages
3- configure the connection to your local DBMS (msql, postgresql, ...) and for that you will have to go to the .env file and modify the line variable DATABASE_URL as follows 
DATABASE_URL = "your_dbms://your_username:your_password@localhost:your_default_port/your_db_name?schema=public
4- Populate your database with demo data by using the command "npm run seed" (uses prisma seeding)
5- launch your server using "npm run devStart"
