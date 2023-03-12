import React from "react";
import "./catalogue.css";
// import sgMail from "@sendgrid/mail";
// import GoToTop from "../../components/GoToTop";
// import Card from "../../components/card";
// import PanelData from "../../Data/PanelData";

const Catalogue = () => {
  // const [base64, setBase64] = useState("");

  // const onChange = (e) => {
  //   const files = e.target.files;
  //   const file = files[0];
  //   getBase64(file);
  // };

  // const onLoad = (fileString) => {
  //   setBase64(fileString);
  //   console.log(base64);
  // };

  // const getBase64 = (file) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     console.log(file);
  //     onLoad(reader.result);
  //     console.log(base64);
  //   };
  // };

  // const makeRequest = async () => {

  //   fetch(
  //     "https://u906dh4sr1.execute-api.af-south-1.amazonaws.com/sendEmail",
  //     {
  //       mode: "no-cors",
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         senderName: "ahmedareeb401@gmail.com",
  //         senderEmail: "umairmalik7777777@gmail.com",
  //         message: "HELLO WORLD THIS IS FROM REACT APP P.S. Lebron the GOAT.",
  //         base64Data: base64,
  //         date: new Date(),
  //         fileName: "TEST_FILE_NAME",
  //       }),
  //     }
  //   ).then((response) => {
  //     console.log(response);
  //   });
  // };

  // const [form] = Form.useForm();

  const makeRequest = () => {
    // const message = {
    // 	to: 'ribzrocks@gmail.com',
    // 	from: 'ahmedreeb401@gmail.com',
    // 	subject: 'New Message from Portfolio',
    // 	html: ` <p><strong>Name:</strong> HelEOS</p>
    //   <p>$HELEOS</p>`,
    // };

    

    const apiKey = "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";
    const url = "https://api.sendgrid.com/v3/mail/send";

    fetch(url, {
      method: "POST",
      mode:'no-cors',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(
        {
          "personalizations": [
            {
              "to": [
                {
                  "email": "ribzrocks@gmail.com"
                }
              ],
              "subject": "Test email from SendGrid"
            }
          ],
          "from": {
            "email": "ahmedareeb401@gmail.com"
          },
          "content": [
            {
              "type": "text/plain",
              "value": "This is a test email sent from SendGrid."
            }
          ]
        }
      ),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="App">
      {/* <input type="file" accept="application/pdf" onChange={onChange} />
     
      <button onClick={makeRequest}>SEND TO LAMBDA</button> */}
      <button onClick={makeRequest}>SEND</button>
    </div>
  );
};

export default Catalogue;
