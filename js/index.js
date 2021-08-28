const getUserData = async () => {
    const url = `https://randomuser.me/api/?results=1`
    const res = await fetch(url)
    const data = await res.json()
    getUser(data.results);
};
getUserData()

const getUser = users => {
    // console.log(users);
    // const userImage = document.getElementById('user-img');


    const userContainer = document.getElementById('user');


    users.forEach(user => {
        // console.log(user.email);
        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = `
        
        <div id="user-img" class="user-img flex justify-center">
        <img
            id="user-image"
            class="rounded-full border-2 border-green-400 p-1"
            src="${user.picture.large}"
            alt=""
        />
        </div>

        <div
        class="user-details flex justify-center flex-col items-center py-4"
        >
            <p id="user-title" class="text-xl text-gray-400"></p>
            <p id="user-value" class="text-4xl capitalize text-indigo-800"></p>
        </div>

        <div class="user-icons grid grid-cols-6 gap-20 w-1/2 mx-auto py-4 my-4">
        <button onmouseover="showUserName('${user.name.title}', '${user.name.first}', '${user.name.last}')" id="user-name" class="user-name">
            <i
            class="far fa-user text-4xl text-gray-300 hover:text-green-300"
            ></i>
        </button>

        <button onmouseover="showUserEmail('${user.email}' )" class="user-email">
            <i
            class="
            far
            fa-envelope
            text-4xl text-gray-300
            hover:text-green-300
            "
            ></i>
        </button>

        <button onmouseover="showUserBirthday('${user.registered.date}')" class="user-birthday">
            <i
            class="
                far
                fa-calendar
                text-4xl text-gray-300
                hover:text-green-300
            "
            ></i>
        </button>

        <button onmouseover="showUserAddress('${user.location.street.number}', '${user.location.street.name}', '${user.location.city}')" class="user-address">
            <i
            class="
            fas
            fa-map-marked
            text-4xl text-gray-300
            hover:text-green-300
            "
            ></i>
        </button>

        <button onmouseover="showUserNumber('${user.phone}')" class="user-phone">
            <i
            class="
            fas
            fa-phone-alt
            text-4xl text-gray-300
            hover:text-green-300
            "
            ></i>
        </button>

        <button onmouseover="showUserPassword('${user.login.password}')" class="user-password">
            <i
            class="fas fa-lock text-4xl text-gray-300 hover:text-green-300"
            ></i>
        </button>

        </div>
        `;
        userContainer.appendChild(detailsDiv)
    });
}

const showUserName = (title, first, last) => {
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');
    userValue.style.textTransform = 'capitalize';
    userTitle.innerText = `Hi, My name is`
    userValue.innerText = `${title} ${first} ${last}`
};

const showUserEmail = (email) => {
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');
    userValue.style.textTransform = 'lowercase';
    userTitle.innerText = `My email address is`;
    userValue.innerText = `${email}`
};

const showUserBirthday = getDate => {
    const date = new Date(getDate).toDateString();
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');
    userValue.style.textTransform = 'capitalize';
    userTitle.innerText = `My birthday is`;
    userValue.innerText = `${date}`
};

const showUserAddress = (streetNumber, streetName, cityName) => {
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');
    userTitle.innerText = `My address is`;
    userValue.innerText = `${streetNumber} - ${streetName} - ${cityName}`
};

const showUserNumber = number => {
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');
    userTitle.innerText = `My phone number is`;
    userValue.innerText = `${number}`
};

const showUserPassword = pass => {
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');
    userTitle.innerText = `My password is`;
    userValue.innerText = `${pass}`
};