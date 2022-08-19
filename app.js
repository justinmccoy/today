const express = require("express");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const app = express();
const dirPath = path.join(__dirname, "public/pdfs");

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

/*const files = fs.readdirSync(dirPath).map(name => {
	return {
		name: path.basename(name, ".pdf"),
		url: `/pdfs/${name}`
		};
});
*/

const files = {
		name: "pdf",
		url: `https://pdfs-knfa2.s3.us-east.cloud-object-storage.appdomain.cloud/wallstreetjournal_20220715_TheWallStreetJournal.pdf`
};

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req, res) => {
	res.render("index", files);
});


app.listen(port, ip, () => console.log(`app listening on port ${port}`));
