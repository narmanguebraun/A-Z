---
title: "SSH Key"
date: "2022-01-10T11:00:00.322Z"
coverImage: "/img/cover.jpg"
ogImage:
  url: "/img/cover.jpg"
---

Remove all ssh entries from the ssh-agent: `ssh-add -D`  
Add the relevant ssh key: `ssh-add ~/.ssh/<id_rsa_keyname>`  
Remove ssh key: `rm ~/.ssh/<id_rsa_keyname>`

Article: [Manage multiple GitHub accounts, freeCodeCamp](https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/)
