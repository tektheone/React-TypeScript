
interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  Brazil = 'Brazil',
  France = 'France',
  India = 'India',
  UnitedStates = 'United States'
}

export const User = (props: Props) => {

  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>He is {props.isMarried ? "married" : "a single"}</p>
      <p>Country of Origin: {props.country}</p>
    </>
  )
}