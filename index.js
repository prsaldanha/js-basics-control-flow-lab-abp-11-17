function scuberGreetingForFeet(ride)
{
  if (ride <= 400)
  {
    return "This one is on me!"
  }

}

function ternaryCheckCity(city)
{
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'

}

function switchOnCharmFromTip(response)
{
  switch (response)
  {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
    return 'Bye';
    break;
  }
}
