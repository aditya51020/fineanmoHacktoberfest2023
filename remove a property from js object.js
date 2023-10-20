let p = {
	name: "person1",
	age:50,
	address:"address1"
};

delete p.address;

console.log("The address of "
	+ p.name +" is " + p.address);
