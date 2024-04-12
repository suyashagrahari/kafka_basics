// admin topics wagera create krne ke kaam aata h 

const {kafka} = require("./client")

  async function init(){

    // first hm admin create krengye 
    const admin = kafka.admin();
    console.log("admin is connecting ...")
    admin.connect();
    console.log("Admin Connection success...")

    // now second hm topics create krengye 
    console.log("creating topic [rider_updates]")
    admin.createTopics({
        topics:[
            {
                topic:"rider_updates",
                numPartitions:2,
            }
        ]
    })
    console.log("topic created successfull [rider_updates]")

    console.log("disconecting admin...")
    await admin.disconnect();
  }

  init();