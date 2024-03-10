export default defineEventHandler((event) => {
  const {stupidsec} = getHeaders(event)
  if(stupidsec=='45678'){
    const { name, email, tel, msg } = getQuery(event)
    const res = name + " " + email + " " + tel + " \n" + msg
    console.log(stupidsec)
    console.log(event)
    return {
      res
    }
  } else{
    return {
      statusCode: 401,
      body: JSON.stringify('Unauthorized')
    }
  }
})
