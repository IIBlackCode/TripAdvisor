module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "여행지 " + name + "가(이) 정상적으로 등록되었습니다."
        : status;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}