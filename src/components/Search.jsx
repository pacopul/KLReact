const Search = ({ onSearch }) => {
const handleInputChange = (e) => {
   onSearch(e.target.value);
};
   return (
    < div className="text-center py-3 bg-info-subtle ">
       <input className="py-3 px-5 rounded-2 border-1 border-secondary w-50 "
           type="search"
           placeholder="Buscar..."
           onChange={handleInputChange}
       />
       </div>
   );
};
export default Search;
