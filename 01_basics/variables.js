const accountId = 123456
let userName = 'JohnDoe'
var accountPassword = "securePassword123"
accountcity = 'Delhi'
let accountState;

// accountId = '67890'; // This will throw an error if using 'const'
accountPassword= "newSecurePassword456"
userName = 'JaneDoe'
accountcity = 'Mumbai' 


console.log(accountId);
console.table([accountId, userName, accountPassword, accountcity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
 */