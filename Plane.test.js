const { TestScheduler } = require('jest')
const Plane = require('./Plane')
const Passenger = require('./Passenger')

describe('Plane', function(){
    test('where is it going?', function(){
        const plane = new Plane()
        plane.setDestination('London')
        expect(plane.destination).toEqual('London')
    })
    test('does it have passengers?', function(){
        let plane = new Plane('London')
        plane.addPassenger('Matthew')
        plane.addPassenger('James')
    })
    test('only passengers with a bag?', function(){
        plane = new Plane('London')
        let person = new Passenger('Matthew')
        plane.addPassenger(person)
        person.addBag(20)
        expect(person.bags.length).not.toBe(0)
    })
})