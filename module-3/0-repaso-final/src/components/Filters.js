import FilterCountry from './FilterCountry';

function Filters (props){
return(
  <section>
    <form action=''>
    <FilterCountry handleFilterCountry={props.handleFilterCountry}/>
    {/* <FilterCity/>
    <FilterName/> */}
    </form>
  </section>
)
}

export default Filters;