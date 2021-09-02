
const EventEmitter = require("events");

const logger = new EventEmitter();

logger.on("problem", description => {
	console.log("[PROBLEM] " + description);
});

logger.emit("problem", "Webseite nicht gefunden");
