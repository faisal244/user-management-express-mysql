const User = require("../../models/User");

const login = async (req, res) => {
	ry {
		 get the user data from payload
		nst { emailAddress, password } = req.body;

		 get user by email address
		nst user = await User.findOne({ where: { emailAddress } });

		 (!user) {
			sole.log(
				ROR]: Failed to login | No user with email address of ${emailAddress}`
			

			urn res.status(401).json({ error: "Failed to login" });
		

		nst isAuthorised = await user.checkPassword(password);

		 (isAuthorised) {
			urn res.json({ data: "hello" });
		else {
			urn res.status(401).json({ data: "get lost" });
		

		turn res.json({ data: "hello" });
	 catch (error) {
		nsole.log(`[ERROR]: Failed to login | ${error.message}`);

		turn res.status(500).json({ error: "Failed to login" });
	
};

const signup = async (req, res) => {
	ry {
		 get the user data from payload
		nst {
			stName,
			tName,
			rname,
			ilAddress,
			sword,
			eOfBirth,
			fileImageUrl,
		= req.body;

		 check if user exists
		nst user = await User.findOne({ where: { emailAddress } });

		 (user) {
			sole.log(
				ROR]: Failed to create user | Email address of ${emailAddress} already exists`
			

			urn res.status(400).json({ error: "Failed to create user" });
		

		 create user
		nst data = await User.create({
			stName,
			tName,
			rname,
			ilAddress,
			sword,
			eOfBirth,
			fileImageUrl,
		;

		turn res.json({ data });
	 catch (error) {
		nsole.log(`[ERROR]: Failed to create user | ${error.message}`);

		turn res.status(500).json({ error: "Failed to create user" });
	
};

module.exports = {
	ogin,
	ignup,
};

