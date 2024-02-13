export const createEmpFields=[
    {
        "name":"First Name *",
        "regExp":"/^[a-zA-Z]+$/",
        "errMsg":"required and only characters are allowed",
        "type":"text",
        "fieldType":"normal",
        "varName":"fname",
        "req":true
    },
    {
        "name":"Middle Name",
        "regExp":"/^[a-zA-Z]+$/",
        "errMsg":"only characters are allowed",
        "type":"text",
        "fieldType":"normal",
        "varName":"mname"
    },
    {
        "name":"Last Name *",
        "regExp":"/^[a-zA-Z]+$/",
        "errMsg":"required and only characters are allowed",
        "type":"text",
        "fieldType":"normal",
        "varName":"lname",
        "req":true
    },
    {
        "name":"Employee ID *",
        "regExp":"",
        "errMsg":"required!",
        "type":"text",
        "fieldType":"normal",
        "varName":"empId",
        "req":true
    },

    {
        "name":"Gender",
        "regExp":"",
        "type":"",
        "fieldType":"select",
        "options":['Select','Male','Female','Not to disclose'],
        "varName":"gender"
    },
    {
        "name":"Email *",
        "regExp":"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/",
        "errMsg":"it is required and something not right check your mail",
        "type":"email",
        "fieldType":"normal",
        "varName":"email",
        "req":true
    },
    {
        "name":"Mobile Number *",
        "regExp":"/^[0-9]{10}$/",
        "errMsg":"must be 10 digit and required",
        "type":"number",
        "fieldType":"normal",
        "varName":"mobile",
        "req":true
    },
    {
        "name":"Employment Type *",
        "regExp":"",
        "errMsg":"Required!",
        "type":"",
        "fieldType":"select",
        "options":['Select','Contract','Trainee','Permanent'],
        "varName":"empType",
        "req":true
    },
    
]