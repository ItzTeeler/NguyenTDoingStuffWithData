import { FetchData } from "./fetchApi.js"
let sortIdBtn = document.getElementById("sortIdBtn")
let sortFirstBtn = document.getElementById("sortFirstBtn")
let sortLastBtn = document.getElementById("sortLastBtn")
let sortEmailBtn = document.getElementById("sortEmailBtn")
let sortAgeBtn = document.getElementById("sortAgeBtn")
let sortHeightBtn = document.getElementById("sortHeightBtn")

let show10 = document.getElementById("show10")
let show20 = document.getElementById("show20")
let show30 = document.getElementById("show30")
let show40 = document.getElementById("show40")
let show50 = document.getElementById("show50")

let loadListOfPeople = document.getElementById("loadListOfPeople")
let pageNumber = document.getElementById("pageNumber")

let previousBtn = document.getElementById("previousBtn")
let nextBtn = document.getElementById("nextBtn")

let sortId = true;
let sortFirst = true;
let sortLast = true;
let sortEmail = true;
let sortAge = true;
let sortHeight = true;

let peoplePage = 10;
let currentPage = 1;
let totalPages = 10;
let peopleData;

const CreatingTable = async (peoplePage) => {
    loadListOfPeople.innerHTML = "";
    pageNumber.innerText = currentPage;

    let firstIndex = (currentPage - 1) * peoplePage;
    let lastIndex = Math.min(firstIndex + peoplePage);

    peopleData.slice(firstIndex, lastIndex).map(people => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.scope = "row";
        th.innerText = people.Id;
        let td2 = document.createElement("td");
        td2.innerText = people.FirstName;
        let td3 = document.createElement("td");
        td3.innerText = people.LastName;
        let td4 = document.createElement("td");
        td4.innerText = people.Email;
        let td5 = document.createElement("td");
        td5.innerText = people.Height;
        let td6 = document.createElement("td");
        td6.innerText = people.Age;

        loadListOfPeople.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    });
}

sortIdBtn.addEventListener("click", async () => {
    if (sortId) {
        peopleData.sort((a, b) => {
            if (a.Id < b.Id) {
                return -1;
            }
            if (a.Id > b.Id) {
                return 1;
            }
            return 0;
        });
    } else {
        peopleData.sort((a, b) => {
            if (a.Id > b.Id) {
                return -1;
            }
            if (a.Id < b.Id) {
                return 1;
            }
            return 0;
        });
    }
    sortId = !sortId;
    CreatingTable(peoplePage)
})

sortFirstBtn.addEventListener("click", async () => {
    if (sortFirst) {
        peopleData.sort((a, b) => {
            if (a.FirstName < b.FirstName) {
                return -1;
            }
            if (a.FirstName > b.FirstName) {
                return 1;
            }
            return 0;
        });
    } else {
        peopleData.sort((a, b) => {
            if (a.FirstName > b.FirstName) {
                return -1;
            }
            if (a.FirstName < b.FirstName) {
                return 1;
            }
            return 0;
        });
    }
    sortFirst = !sortFirst;
    sortId = true;
    sortLast = true;
    sortEmail = true;
    sortAge = true;
    sortHeight = true;
    CreatingTable(peoplePage);
});

sortLastBtn.addEventListener("click", async () => {
    if (sortLast) {
        peopleData.sort((a, b) => {
            if (a.LastName < b.LastName) {
                return -1;
            }
            if (a.LastName > b.LastName) {
                return 1;
            }
            return 0;
        });
    } else {
        peopleData.sort((a, b) => {
            if (a.LastName > b.LastName) {
                return -1;
            }
            if (a.LastName < b.LastName) {
                return 1;
            }
            return 0;
        });
    }
    sortLast = !sortLast;
    sortId = true;
    sortFirst = true;
    sortEmail = true;
    sortAge = true;
    sortHeight = true;
    CreatingTable(peoplePage)

})
sortEmailBtn.addEventListener("click", async () => {
    if (sortEmail) {
        peopleData.sort((a, b) => {
            if (a.Email < b.Email) {
                return -1;
            }
            if (a.Email > b.Email) {
                return 1;
            }
            return 0;
        });
    } else {
        peopleData.sort((a, b) => {
            if (a.Email > b.Email) {
                return -1;
            }
            if (a.Email < b.Email) {
                return 1;
            }
            return 0;
        });
    }
    sortEmail = !sortEmail;
    sortId = true;
    sortFirst = true;
    sortLast = true;
    sortAge = true;
    sortHeight = true;
    CreatingTable(peoplePage)

})
sortAgeBtn.addEventListener("click", async () => {
    if (sortAge) {
        peopleData.sort((a, b) => {
            if (a.Age < b.Age) {
                return -1;
            }
            if (a.Age > b.Age) {
                return 1;
            }
            return 0;
        });
    } else {
        peopleData.sort((a, b) => {
            if (a.Age > b.Age) {
                return -1;
            }
            if (a.Age < b.Age) {
                return 1;
            }
            return 0;
        });
    }
    sortAge = !sortAge;
    sortId = true;
    sortFirst = true;
    sortLast = true;
    sortEmail = true;
    sortHeight = true;
    CreatingTable(peoplePage)

})
sortHeightBtn.addEventListener("click", async () => {
    if (sortHeight) {
        peopleData.sort((a, b) => {
            if (a.Height < b.Height) {
                return -1;
            }
            if (a.Height > b.Height) {
                return 1;
            }
            return 0;
        });
    } else {
        peopleData.sort((a, b) => {
            if (a.Height > b.Height) {
                return -1;
            }
            if (a.Height < b.Height) {
                return 1;
            }
            return 0;
        });
    }
    sortHeight = !sortHeight;
    sortId = true;
    sortFirst = true;
    sortLast = true;
    sortEmail = true;
    sortAge = true;
    CreatingTable(peoplePage)

})

show10.addEventListener("click", () => {
    peoplePage = 10;
    totalPages = Math.ceil(peopleData.length / peoplePage);
    currentPage = 1;
    CreatingTable(peoplePage);
});

show20.addEventListener("click", () => {
    peoplePage = 20;
    totalPages = Math.ceil(peopleData.length / peoplePage);
    currentPage = 1;
    CreatingTable(peoplePage);
});

show30.addEventListener("click", () => {
    peoplePage = 30;
    totalPages = Math.ceil(peopleData.length / peoplePage);
    currentPage = 1;
    CreatingTable(peoplePage);
});

show40.addEventListener("click", () => {
    peoplePage = 40;
    totalPages = Math.ceil(peopleData.length / peoplePage);
    currentPage = 1;
    CreatingTable(peoplePage);
});

show50.addEventListener("click", () => {
    peoplePage = 50;
    totalPages = Math.ceil(peopleData.length / peoplePage);
    currentPage = 1;
    CreatingTable(peoplePage);
});

previousBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        pageNumber.innerText = currentPage;
        CreatingTable(peoplePage);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        pageNumber.innerText = currentPage;
        CreatingTable(peoplePage);
    }
});

window.onload = async () => {
    peopleData = await FetchData();
    CreatingTable(peoplePage);
}

