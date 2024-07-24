
export default function WeatherDayInAWeek ({params}) {

    const allowedDays =
        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    if(!allowedDays.includes(params.dayInAWeek)) {
        return <h4>You didnt enter the correct day in a Week</h4>
    }

    return <h1>Hello World {params.dayInAWeek}</h1>
}