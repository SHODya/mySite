const signUpLogin = document.querySelector(".sign-up-login");
const signUpPass = document.querySelector(".sign-up-pass");
const signInLogin = document.querySelector(".sign-in-login");
const signInPass = document.querySelector(".sign-in-pass");
const header = document.querySelector(".header");
const links = document.querySelectorAll(".textLink");
const borderB = document.querySelector(".borderB");
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");



//LogReg
const users = [];
function signUp() {
    users.push({
        login: signUpLogin.value,
        password: signUpPass.value,
        
    });
    console.log(users);
}

function signIn() {
    const filteredUsers = users.filter((user) => 
    user.login === signInLogin.value &&
     user.password === signInPass.value
    );
    if (filteredUsers[0]) {
        console.log(`Вы авторизовались как: ${filteredUsers[0].login}`);
    }else {
        console.log('Такой пользователь не найден');
    }
    
}

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
    });

        currentBtn.classList.add('active');
        currentTab.classList.add('active'); 
        }


    });
});