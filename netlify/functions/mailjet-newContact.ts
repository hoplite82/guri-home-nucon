import mailjet from 'node-mailjet'
if (process.env.MJ_APIKEY_PUBLIC && process.env.MJ_APIKEY_PRIVATE) {

    
   const request = mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
        .post("contact", { 'version': 'v3' })
        .request({
            "IsExcludedFromCampaigns": "true",
            "Name": "New Contact",
            "Email": "test@mailjet.com"
        })
    request
        .then((result: any) => {
            console.log(result.body)
        })
        .catch((err: any) => {
            console.log(err.statusCode)
        })
} else {
    
}