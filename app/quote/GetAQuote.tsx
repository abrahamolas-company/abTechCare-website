
import { Dropdown } from "./QuoteDropDown";

const GetAQuote = () => {
    return (
        <form className="max-w-2xl pt-56 mx-auto p-4">
            <div className="space-y-4">
                <Dropdown label="Country" options={["USA", "Canada", "UK", "Nigeria"]} />
                <Dropdown label="State" options={["Lagos", "California", "Texas"]} />
                <Dropdown label="L.G.A" options={["Ikeja", "Yaba", "Surulere"]} />
                <Dropdown label="Choose Gadget" options={["Phone", "Laptop", "Tablet"]} />
                <Dropdown label="Choose Brand" options={["Apple", "Samsung", "Dell"]} />
                <Dropdown label="Choose Gadget Fault" options={["Screen Replacement", "Battery Issue"]} />

                <button className="bg-[#FFCC29] font-medium !mt-7 mb-4 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 px-5 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
                    Get a Quote
                </button>

                <p className="max-w-[457px] !mb-10 text-sm leading-5 mx-auto text-[#211D1D] text-center">These prices are just for reference and the actual price is subject to your device condition after being diagnosis by our technician when you make an order.</p>

                <div className="mt-6 overflow-x-auto !mb-20">
                    <table className="w-full border border-[#211D1D] text-center">
                        <tbody>
                            <tr>
                                <td className="py-6 px-4 font-light border border-[#211D1D]">Phone</td>
                                <td className="py-6 px-4 font-light border border-[#211D1D]">Apple</td>
                                <td className="py-6 px-4 font-light border border-[#211D1D]">Screen Replacement</td>
                                <td className="py-6 px-4 font-light border border-[#211D1D]">₦210,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </form>
    );
};

export default GetAQuote;