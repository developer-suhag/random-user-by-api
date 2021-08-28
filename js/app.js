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
}