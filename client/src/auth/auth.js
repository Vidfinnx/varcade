import Userfront from "@userfront/react";
Userfront.init("auth");

async function getInfo() {
  const res = await window.fetch("/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Userfront.accessToken()}`,
    },
  });

  console.log(res);
}

getInfo();