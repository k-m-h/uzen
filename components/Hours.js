

export default function Hours({dineIn, takeOut}) {
  const unavailableContent = <span>Currently Unavailable due to COVID-19</span>;
  const dineInContent = dineIn ?
    <>
      <p>Currently operating at limited capacity</p>
      <p><span>Mon-Fri</span>	<span>11:00AM–1:00PM, 5:00PM–8:30PM</span></p>
      <p><span>Sat</span>	<span>5:00PM–8:30PM</span></p>
      <p><span>Sun</span>	<span>Closed</span></p>
    </> :
    unavailableContent;

  const takeOutContent = takeOut ?
    <>
      <p><span>Mon-Fri</span>	<span>11:00AM–1:00PM, 5:00PM–8:30PM</span></p>
      <p><span>Sat</span>	<span>5:00PM–8:30PM</span></p>
      <p><span>Sun</span>	<span>Closed</span></p>
    </> :
    unavailableContent;
  return (
    <hours>
      <div>
        <h4>Dine-in Hours</h4>
        {dineInContent}
      </div>
      <div>
        <h4>Take-out Hours</h4>
        {takeOutContent}
      </div>
    </hours>
  )
}
