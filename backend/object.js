const user={
    name:'Preethi',
    age:25,
    greet() {
        console.log(`Hi,I m ${this.name}`);
    }
};
const colors=['red','green','blue'];
colors.forEach(color=>console.log(color));
const lengths= colors.map(color=>color.length);
console.log(lengths);