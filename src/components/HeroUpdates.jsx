import GreyLineDotted from "../assets/GreyLineDotted.svg";

function HeroUpdates() {
    return (
        <>
            <img src={GreyLineDotted} alt="" className="w-screen pt-3 pb-20 bg-[#595959]" />
            <div className=" bg-[#595959] text-[47px] text-[#ffffff] font-Aldrich pb-[-25px]">
                <p>No current Updates</p>
            </div>
        </>
    );
}

export default HeroUpdates;