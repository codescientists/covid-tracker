import millify from "millify";
import LineGraph from "./LineGraph";

const CasesByCountries = ({ countries }) => {
  return (
    <div className="container bg-white drop-shadow-md p-4">
      <h1 className="text-2xl mb-5">Cases By Country</h1>

      <table className="w-full">
        <tbody>
          {countries.slice(0, 12).map((country, index) => (
            <tr className="odd:bg-gray-100 even:bg-white p-2" key={index}>
              <td className="text-left">{country.country}</td>
              <td className="text-right">{millify(country.cases)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <LineGraph />
    </div>
  );
};

export default CasesByCountries;
