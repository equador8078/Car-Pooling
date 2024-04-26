const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Driver = require('./models/Driver'); // Import the Driver model
const User = require('./models/User');



const app = express();
const port = 3000;

const connectString = "mongodb+srv://yashb8078:202252311.IIITV@cluster0.xwycuxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB connection
mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const driverRoutes = require('./routes/driverRoutes');
app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function (req, res) {
    const filePath = path.join(__dirname, 'public', 'home.html');
    res.sendFile(filePath);
});

// Serve other HTML files
app.get("/driversPage", function (req, res) {
    const filePath = path.join(__dirname, 'public', 'driversPage.html');
    res.sendFile(filePath);
});

app.get("/logIN", function (req, res) {
    const filePath = path.join(__dirname, 'public', 'logIN.html');
    res.sendFile(filePath);
});

app.get("/signUP", function (req, res) {
    const filePath = path.join(__dirname, 'public', 'signUP.html');
    res.sendFile(filePath);
});

// Route to handle form submission for driver details
app.post("/submit-driver-details", async function (req, res) {
    try {
        // Extract data from the request body
        const { fname, lname, mobile, email, licence, vehicle, vehicleNumber, city } = req.body;

        // Create a new driver document in the MongoDB database
        const newDriver = new Driver({
            firstName: fname,
            lastName: lname,
            mobileNumber: mobile,
            email: email,
            licenceNumber: licence,
            vehicle: vehicle,
            vehicleNumber: vehicleNumber,
            city: city
        });

        // Save the new driver document to the database
        await newDriver.save();

        // Send a success response if the data is saved successfully
        res.send(`
            <script>
                alert("Driver created successfully");
                window.location.href = '/public/home';
            </script>
        `);


    } catch (err) {
        console.error('Error saving driver details:', err);
        // Send an error response if there's an error saving to the database
        res.status(500).send("Error saving driver details");
    }
});

// Route to handle user sign up
app.post("/sign", async function(req, res) {
    try {
        // Extract data from request body
        const { firstName, lastName, email, password } = req.body;

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        // Save the new user to the database
        await newUser.save();

        // Send a success response with a pop-up message and redirect to login page
        res.send(`
            <script>
                alert("User created successfully");
                window.location.href = '/public/home,html';
            </script>
        `);
    } catch (error) {
        console.error('Error creating user:', error);
        // Handle errors, such as displaying error messages to the user
        res.status(500).send('Internal Server Error');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
