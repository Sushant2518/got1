let func = function myFunction(event) {
  var un = document.getElementById("exampleInputEmail1").value;
  var pw = document.getElementById("exampleInputPassword1").value;
  if (un === "student" && pw === "1234") {
    window.location.href = "customer-details.html";
  } else {
    alert("Invalid Username or Password ");
  }
};

const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);

  console.log(Array.from(data));

  try {
    const res = await fetch(
      "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",
      {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://mk8s2q.csb.app",
          "Access-Control-Allow-Methods": "POST",
          "Status Code": "HTTP/1.1 200 OK"
        },
        body: JSON.stringify(data)
      }
    );

    const resData = await res.json();

    console.log(resData);
  } catch (err) {
    console.log(err.message);
  }
});
