const passport = require('passport');
const axios = require('axios');

module.exports = (app) => {
    //authenticate the user with oath callback into the oauth flow
    //ask for user profile and email
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        }
    );

    //passport attaches the logout function to req
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    //passport attaches the user object to req
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.post('/api/newstock', async (req, res) => {
        console.log("req: ", req.body.symbol);
        const ROOT_URL = 'https://api.iextrading.com/1.0/';
        const STOCK = 'stock';
        const DAILY = '1d';
        const MONTHLY = '1m';
        const YEARLY = '1y';

        const CHART = 'chart';

        const symbol = req.body.symbol;
        const dailyUrl = `${ROOT_URL}${STOCK}/${symbol}/${CHART}/${DAILY}`;
        const monthlyUrl = `${ROOT_URL}${STOCK}/${symbol}/${CHART}/${MONTHLY}`;
        const yearlyUrl = `${ROOT_URL}${STOCK}/${symbol}/${CHART}/${YEARLY}`;
        const companyUrl = `${ROOT_URL}${STOCK}/${symbol}/company`;

        const dailyRequest = await axios.get(dailyUrl);
        const monthlyRequest = await axios.get(monthlyUrl);
        const yearlyRequest = await axios.get(yearlyUrl);
        const companyRequest = await axios.get(companyUrl);

        const stockInfo = [companyRequest.data, dailyRequest.data, monthlyRequest.data, yearlyRequest.data];
        
        res.send(stockInfo);

        /// Todo: uncomment this when we are fetching stock list from mongo user model
        req.user.stocks.push(req.body.symbol);
        req.user.save();
    })

    app.post('/api/fetchStock', async (req, res) => {
        console.log("req: ", req.body.symbol);
        const ROOT_URL = 'https://api.iextrading.com/1.0/';
        const STOCK = 'stock';
        const DAILY = '1d';
        const MONTHLY = '1m';
        const YEARLY = '1y';

        const CHART = 'chart';

        const symbol = req.body.symbol;
        const dailyUrl = `${ROOT_URL}${STOCK}/${symbol}/${CHART}/${DAILY}`;
        const monthlyUrl = `${ROOT_URL}${STOCK}/${symbol}/${CHART}/${MONTHLY}`;
        const yearlyUrl = `${ROOT_URL}${STOCK}/${symbol}/${CHART}/${YEARLY}`;
        const companyUrl = `${ROOT_URL}${STOCK}/${symbol}/company`;

        const dailyRequest = await axios.get(dailyUrl);
        const monthlyRequest = await axios.get(monthlyUrl);
        const yearlyRequest = await axios.get(yearlyUrl);
        const companyRequest = await axios.get(companyUrl);

        const stockInfo = [companyRequest.data, dailyRequest.data, monthlyRequest.data, yearlyRequest.data];
        
        res.send(stockInfo);
    })
};