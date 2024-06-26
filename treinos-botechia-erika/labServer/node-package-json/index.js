process.stdin.pipe(process.stdout)


.on("data", msg=>console.log("data terminal", msg.toString()))
.on("error",0)
.on("end")
.on("close")