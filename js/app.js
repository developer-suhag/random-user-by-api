document.getElementById('user-name').addEventListener('mouseover', () => {
    // console.log('paiche tore');
    getUserData()
});

const getUserData = async () => {
    const url = `https://randomuser.me/api/?results=100`
    const res = await fetch(url)
    const data = await res.json()
    getUser(data.results);
};

const getUser = users => {
    // console.log(users);
    const userImage = document.getElementById('user-img');
    const userTitle = document.getElementById('user-title');
    const userValue = document.getElementById('user-value');

    const userContainer = document.getElementById('user');

    // users.forEach(user => {
    //     console.log(user);
    //     userTitle.innerText = `Hi, My Name is`
    //     userValue.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    //     const userProfile = document.createElement('img');
    //     userProfile.classList.add('rounded-full');
    //     userProfile.src = `${user.picture.thumbnail}`
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <img
    //         id="user-image"
    //         class="rounded-full border-2 border-green-400 p-1"
    //         src="https://randomuser.me/api/portraits/men/12.jpg"
    //         alt=""
    //       />
    //     `;
    //     userImage.appendChild(div)
    // });

    users.forEach(user => {
        console.log(user);
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
            <p id="user-title" class="text-xl text-gray-400">Hi, My Name is</p>
            <p id="user-value" class="text-4xl capitalize text-indigo-800">${user.name.title} ${user.name.first} ${user.name.last}</p>
        </div>

        <div class="user-icons grid grid-cols-6 gap-20 w-1/2 mx-auto py-4 my-4">
        <button id="user-name" class="user-name">
            <i
            class="far fa-user text-4xl text-gray-300 hover:text-green-300"
            ></i>
        </button>
        <button class="user-email">
            <i
            class="
            far
            fa-envelope
            text-4xl text-gray-300
            hover:text-green-300
            "
            ></i>
        </button>
        <button class="user-birthday">
            <i
            class="
                far
                fa-calendar
                text-4xl text-gray-300
                hover:text-green-300
            "
            ></i>
        </button>
        <button class="user-address">
            <i
            class="
            fas
            fa-map-marked
            text-4xl text-gray-300
            hover:text-green-300
            "
            ></i>
        </button>
        <button class="user-phone">
            <i
            class="
            fas
            fa-phone-alt
            text-4xl text-gray-300
            hover:text-green-300
            "
            ></i>
        </button>
        <button class="user-password">
            <i
            class="fas fa-lock text-4xl text-gray-300 hover:text-green-300"
            ></i>
        </button>
        </div>
        `;
        userContainer.appendChild(detailsDiv)
    });
}