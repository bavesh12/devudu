import React from "react";
import "./Booking.css";
import Seva from "./seva.png";
export default function Booking(){
    return(
<div className="w-102">
    <div class="breadcrumb-div">
        <div class="bc-left">
            <p class="voilet">Home</p><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRoge3Zvy4EURQH4NkViU6h0YhCpaOiVGpErfECCqVX0HoFbyCK1VHqJAqVioSGRCGRCD6Fkc0mc3f8y9575X7tNL8zM/eck5mqKoqiyApmsYWx2Fl+BAc+nGE5dp5vwbpBr9jHVOxsrdDBuWY32IidsRWm6zv+FijkBPOxc7bCCi4CRTxjFxOxcw6FcezgKVDIJVZj52yFOfQCRcAhZmLnbIU1XAWKeKyfVtqzA5PYw0ugkDxmBxZwGigij9mBLjZxFyjktr7eiZ11KGV2JESZHYlRZkdVdUcZ9hfEDtCofoWuA3f+AdtJvkL1IT7K7hDLuY3KdZDprxIhx1JcJfSXuftA8HSXOSzKcZ32taG0FDtnI6Wnj5jS0yOQa0+vqv/zcTffz+ufDP7gSLOnDyP3X0xFURR/6h0P0KNgb0VGPgAAAABJRU5ErkJggg=="
                class="mr-2 ml-2" alt="&gt;"/>
                <p>Online Booking</p>
        </div>
        <div class="bc-right"></div>
    </div>
    <div class="sd-online-booking-main">
        <div class="sd-online-booking-top">
            <h1><span>Types of </span> Online Bookings</h1><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAAYCAMAAABp9gD7AAAATlBMVEUAAAD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giCyLNDdAAAAGnRSTlMAgHwEUBJ3Y3IIVm5JRDYnIRgOaV0xHD46LJSKYvsAAAP7SURBVFjD7VnZspswDCV4xbvBDvD/P9opdnAJEpfpzXTameoRgpYj6dhSur9CmM9uXrJn3X8BJFjRP17Si4V9DHZnDaVmzk/S/cPCDH+8i8jk27DPG+wNeBu7Py4s2zRpLrWgy/N3laziAYrM33HtaTigU7uP1tJgFQ1XSTLyYJ5TDCXiFF2Rd35qmAhqrKVpj22KqG+zoh53jeTpgQifYZBwP3Fhm6cL8na0ErAvPBjP5i8Fcy12fNexmXap9oZFrOufby2Kn2ywJzPnnBej9mfaYwhtzqj7EIniJMibUfVIkhTwe1NeredYzOsrT070VCykAbKvymcBLgX+gsesw6+45lS9pnAhWdBPXIZqBygjRveqVbOPbBiZXxSviT8ziK6OnUpIli8oAyulWNHQyxqqhdpfVz9ogGqfF6VgB5fmvF9GY0VhPmVprg5yEw7PfUJyJGHTVY9Cz3cvNzNnhiPVN3NOLH0xzoBkvlRnDzVbBTd1d0XDxRwr1mIl5/4TxQYB28IdwyxPdbiq5IRgJJCWCLIAtBBcaZyQYu8oUhQd87A+30Opz30BCInMba8FAYh/IofoS5T2+gwmFMYoFDMdWJe9Hb5Q2kwDfuoBCEogh7rg+v2EdIUHVzxHenP+aIYpLs3hEdObnhPQMIX2J3vPxLUlYOgC4Bkoz62AcT+bC7EbqWqacbGNbDAZp61krgeIKLdgxtPHDDFpyNeXFHGicFStv6RBgBD40KmWKlwGhTHduYW4/zKLiZyoDCpQe75F4jr5qTJgtQE8THHmCl033UjVU8PEEJ1jAM20ioVPHfVubeTwZcfdYBiWHq14YbXw0derGg9+/tWYXbEQLgrObr+WEboY9u5UmyhjrbwgiLQUwIyBf3FODbaHUL9WG14zinDYBWHhvwK/FiNo4Xn9gOkjQ3eDpS+6M0FGsn5Fr8wcKIR6yMu5mIcv4hwee3G1Tu47ADeic3Cj3lh9pxECSDww1hTg1TnqGtRh/8Bm2eZTbE7RINPwGkzKwxG9nGqcCcrutVpSQCrvqQsvnIaYqQQmOlKT8XiHNFpZ4726kmJ38AdXNvvg11ntSYOH7We7uUHjSL/P/3TxT8bY0y9Ug7PpfbXkuInp5SSELukAmzuK3QvjAhsHFv1C98BgNq9JNGBQkLRmBnmZooxc9IEi2xoIVYvqtRpVuwzQ8gaTFJEkFc5nHTo0NqmNjApzl4u5sfZpE3AWuq+29Yk4w8+xhVQoaw4wMJzIJ8QFsir+q5rkhm/uWs305plYxu4DQsJChXyhI6i7zJUra5X7gbFLJ2O2NKWkzIcW7IOfaZq0nkQy7tM7+2FkbCQ3IU1alp10+Kf/OfiY/AAgVyxqYND4lQAAAABJRU5ErkJggg=="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAAYCAMAAABp9gD7AAAATlBMVEUAAAD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giD1giCyLNDdAAAAGnRSTlMAgHwEUBJ3Y3IIVm5JRDYnIRgOaV0xHD46LJSKYvsAAAP7SURBVFjD7VnZspswDCV4xbvBDvD/P9opdnAJEpfpzXTameoRgpYj6dhSur9CmM9uXrJn3X8BJFjRP17Si4V9DHZnDaVmzk/S/cPCDH+8i8jk27DPG+wNeBu7Py4s2zRpLrWgy/N3laziAYrM33HtaTigU7uP1tJgFQ1XSTLyYJ5TDCXiFF2Rd35qmAhqrKVpj22KqG+zoh53jeTpgQifYZBwP3Fhm6cL8na0ErAvPBjP5i8Fcy12fNexmXap9oZFrOufby2Kn2ywJzPnnBej9mfaYwhtzqj7EIniJMibUfVIkhTwe1NeredYzOsrT070VCykAbKvymcBLgX+gsesw6+45lS9pnAhWdBPXIZqBygjRveqVbOPbBiZXxSviT8ziK6OnUpIli8oAyulWNHQyxqqhdpfVz9ogGqfF6VgB5fmvF9GY0VhPmVprg5yEw7PfUJyJGHTVY9Cz3cvNzNnhiPVN3NOLH0xzoBkvlRnDzVbBTd1d0XDxRwr1mIl5/4TxQYB28IdwyxPdbiq5IRgJJCWCLIAtBBcaZyQYu8oUhQd87A+30Opz30BCInMba8FAYh/IofoS5T2+gwmFMYoFDMdWJe9Hb5Q2kwDfuoBCEogh7rg+v2EdIUHVzxHenP+aIYpLs3hEdObnhPQMIX2J3vPxLUlYOgC4Bkoz62AcT+bC7EbqWqacbGNbDAZp61krgeIKLdgxtPHDDFpyNeXFHGicFStv6RBgBD40KmWKlwGhTHduYW4/zKLiZyoDCpQe75F4jr5qTJgtQE8THHmCl033UjVU8PEEJ1jAM20ioVPHfVubeTwZcfdYBiWHq14YbXw0derGg9+/tWYXbEQLgrObr+WEboY9u5UmyhjrbwgiLQUwIyBf3FODbaHUL9WG14zinDYBWHhvwK/FiNo4Xn9gOkjQ3eDpS+6M0FGsn5Fr8wcKIR6yMu5mIcv4hwee3G1Tu47ADeic3Cj3lh9pxECSDww1hTg1TnqGtRh/8Bm2eZTbE7RINPwGkzKwxG9nGqcCcrutVpSQCrvqQsvnIaYqQQmOlKT8XiHNFpZ4726kmJ38AdXNvvg11ntSYOH7We7uUHjSL/P/3TxT8bY0y9Ug7PpfbXkuInp5SSELukAmzuK3QvjAhsHFv1C98BgNq9JNGBQkLRmBnmZooxc9IEi2xoIVYvqtRpVuwzQ8gaTFJEkFc5nHTo0NqmNjApzl4u5sfZpE3AWuq+29Yk4w8+xhVQoaw4wMJzIJ8QFsir+q5rkhm/uWs305plYxu4DQsJChXyhI6i7zJUra5X7gbFLJ2O2NKWkzIcW7IOfaZq0nkQy7tM7+2FkbCQ3IU1alp10+Kf/OfiY/AAgVyxqYND4lQAAAABJRU5ErkJggg=="/>
        </div>
        <div class="sd-online-booking-bottom">
            <div class="sd-online-booking-div"><img class="head-image"/>
                <h4>Pratyaksha Seva Tickets</h4>
                <h5>Blessed are those who've got the opportunity to worship divinity oneself. Pratyaksha seva
                    tickets can now be bought offline at the ticket counter and online via our website. Book now.</h5>
                <button>Book Now<img class="imgs"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAdCAYAAABMr4eBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQ4y8XTPQrCQBCG4UUJeBZ/8AqWGo0mt7D1X68nCGJrYW2pFmIhaPXaBNSYgZ3dgF85MA/DMGOAJrAGdkDLuATY8s4DaLsge77zADpaJASeGejpAiUC1NVCcVHQQICiv0GRAPWLggZaqCdAsRbqClCihcKidtTJga5AUFI4R2PMLVOraKaoAid+M7IFagKw8gWWtkAdOPsADQFY+AJzW6ApADNfYKoBLj5AQwAmVkCKbHKAsTWQIgenU84gSfqNd2CoBj6gMhC49r8Af/2j9UHItyUAAAAASUVORK5CYII="
                    alt="images"/></button>
            </div>
            <div class="sd-online-booking-div"><img class="head-image"/>
                <h4>Darshanam Tickets</h4>
                <h5>A spiritual glance of the divine power in the sanctum of a temple relieves the mind of burdens.
                    Experience the sacred power of Darshanam by booking your tickets today.</h5><button><a href="/Darshanam">Book Now</a><img
                        class="imgs"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAdCAYAAABMr4eBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQ4y8XTPQrCQBCG4UUJeBZ/8AqWGo0mt7D1X68nCGJrYW2pFmIhaPXaBNSYgZ3dgF85MA/DMGOAJrAGdkDLuATY8s4DaLsge77zADpaJASeGejpAiUC1NVCcVHQQICiv0GRAPWLggZaqCdAsRbqClCihcKidtTJga5AUFI4R2PMLVOraKaoAid+M7IFagKw8gWWtkAdOPsADQFY+AJzW6ApADNfYKoBLj5AQwAmVkCKbHKAsTWQIgenU84gSfqNd2CoBj6gMhC49r8Af/2j9UHItyUAAAAASUVORK5CYII="
                        alt="images"/></button>
            </div>
            <div class="sd-online-booking-div"><img class="head-image"/>
                <h4>Donations</h4>
                <h5>Devotees can donate to Srisailam Temple via online and offline payments. Srisaila
                    Devasthanam website accepts easy payment methods like credit card, debit card and UPI
                    transactions for donations.</h5><button><a href="#">Donate now</a><img class="imgs"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAdCAYAAABMr4eBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQ4y8XTPQrCQBCG4UUJeBZ/8AqWGo0mt7D1X68nCGJrYW2pFmIhaPXaBNSYgZ3dgF85MA/DMGOAJrAGdkDLuATY8s4DaLsge77zADpaJASeGejpAiUC1NVCcVHQQICiv0GRAPWLggZaqCdAsRbqClCihcKidtTJga5AUFI4R2PMLVOraKaoAid+M7IFagKw8gWWtkAdOPsADQFY+AJzW6ApADNfYKoBLj5AQwAmVkCKbHKAsTWQIgenU84gSfqNd2CoBj6gMhC49r8Af/2j9UHItyUAAAAASUVORK5CYII="
                        alt="images"/></button>
            </div>
        </div>
    </div>
</div>
    
    );
}


