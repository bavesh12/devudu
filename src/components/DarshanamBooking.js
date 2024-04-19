import React from "react";
import "./DarshanamBooking.css"
export default function DarshanamBooking() {
    return (

            <section className="mt-30">
            <div class="breadcrumb-div">
          <div class="bc-left">
            <p  class="voilet">Home</p><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRoge3Zvy4EURQH4NkViU6h0YhCpaOiVGpErfECCqVX0HoFbyCK1VHqJAqVioSGRCGRCD6Fkc0mc3f8y9575X7tNL8zM/eck5mqKoqiyApmsYWx2Fl+BAc+nGE5dp5vwbpBr9jHVOxsrdDBuWY32IidsRWm6zv+FijkBPOxc7bCCi4CRTxjFxOxcw6FcezgKVDIJVZj52yFOfQCRcAhZmLnbIU1XAWKeKyfVtqzA5PYw0ugkDxmBxZwGigij9mBLjZxFyjktr7eiZ11KGV2JESZHYlRZkdVdUcZ9hfEDtCofoWuA3f+AdtJvkL1IT7K7hDLuY3KdZDprxIhx1JcJfSXuftA8HSXOSzKcZ32taG0FDtnI6Wnj5jS0yOQa0+vqv/zcTffz+ufDP7gSLOnDyP3X0xFURR/6h0P0KNgb0VGPgAAAABJRU5ErkJggg=="
              class="mr-2 ml-2" alt="&gt;"/>
            <p>Online Booking</p><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRoge3Zvy4EURQH4NkViU6h0YhCpaOiVGpErfECCqVX0HoFbyCK1VHqJAqVioSGRCGRCD6Fkc0mc3f8y9575X7tNL8zM/eck5mqKoqiyApmsYWx2Fl+BAc+nGE5dp5vwbpBr9jHVOxsrdDBuWY32IidsRWm6zv+FijkBPOxc7bCCi4CRTxjFxOxcw6FcezgKVDIJVZj52yFOfQCRcAhZmLnbIU1XAWKeKyfVtqzA5PYw0ugkDxmBxZwGigij9mBLjZxFyjktr7eiZ11KGV2JESZHYlRZkdVdUcZ9hfEDtCofoWuA3f+AdtJvkL1IT7K7hDLuY3KdZDprxIhx1JcJfSXuftA8HSXOSzKcZ32taG0FDtnI6Wnj5jS0yOQa0+vqv/zcTffz+ufDP7gSLOnDyP3X0xFURR/6h0P0KNgb0VGPgAAAABJRU5ErkJggg=="
              class="mr-2 ml-2" alt="&gt;"/>
            <p>DarshanamBooking</p>
            <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRoge3Zvy4EURQH4NkViU6h0YhCpaOiVGpErfECCqVX0HoFbyCK1VHqJAqVioSGRCGRCD6Fkc0mc3f8y9575X7tNL8zM/eck5mqKoqiyApmsYWx2Fl+BAc+nGE5dp5vwbpBr9jHVOxsrdDBuWY32IidsRWm6zv+FijkBPOxc7bCCi4CRTxjFxOxcw6FcezgKVDIJVZj52yFOfQCRcAhZmLnbIU1XAWKeKyfVtqzA5PYw0ugkDxmBxZwGigij9mBLjZxFyjktr7eiZ11KGV2JESZHYlRZkdVdUcZ9hfEDtCofoWuA3f+AdtJvkL1IT7K7hDLuY3KdZDprxIhx1JcJfSXuftA8HSXOSzKcZ32taG0FDtnI6Wnj5jS0yOQa0+vqv/zcTffz+ufDP7gSLOnDyP3X0xFURR/6h0P0KNgb0VGPgAAAABJRU5ErkJggg=="
              class="mr-2 ml-2" alt="&gt;"/>
          </div>
        </div>
                <div class="container-fluid">
                    <div class="row mlr-30">
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 sd-side-menu visible-md visible-lg"
                            id="side-menu">
                            <div class="sd-dashboard-profile">
                                <div class="profile">
                                    <p style={{marginBottom: "0px"}}><span> <span>Ga</span></span><span
                                        style={{marginLeft: "-2px"}}></span></p>
                                </div>
                                <h2 class="sd-heading-18 float-right-ellipse">Ganesh</h2>
                            </div>
                            <hr class="clearfix" />
                            <nav>
                                <ul class="sd-dashboard-side-menu">
                                    <li class=""><a><img alt="Devotee Dashboard" title="Devotee Dashboard"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVRYw+3ZW8gVVRgG4Gdvf0oqLUmJKKITURflATtRQecDlZ08pjdNzMUgRaEQBQlSBEFWILEvdu2rwg5GZQeyMgQzFUvrqgg7Ukh0MNPkNyy7WGv8l5s9/rO1wqD36tvf+uadd9aavda71jREtNqdBm5GjkkYpzcG8QWWYVGRZz/aB1rtzljMwxScjJEVpT/iQzyJF4s82w2NSDIKS3Ct/vATphd59m6FuMvwHI7uk/d1zCrybFsj9twruL5PkhI7cEGRZx91iZuA1ThsP3mX45oBYVhTca/iEXxbceFIXIkHcEQUsBgXddUtTsRtx4J408EK3uMNvQpwFaY2Wu3OO7gsJpfhxnL894VWu3NFvGEjps4o8uzT2HY6PknKryjy7J0anA28nIhc0cTkpGZRHXFQ5Nnb2JikJlfEG+qIi5y78WiSGt/EkUni6zpECTYn8aiKeHNNrhJfJvHYZldjrd77N9E8cIr/BR7c+E8I3JX8PrzP6w9J4l0V8SE1uXpp2NXEpiRxdV2WVrtzJM5NUt9UxOfG2rpINWxq4qUksbDV7lxSQ9xReAajY2oLViYlK2NOrHkmXjMc7yVYmKRebrTanXH4DCnBBmHC/LMHzyicb+8Jfn6RZ4u6bjZPWNNL/Ir3sa0HZxMnCTavxC84baDIsx9a7c4tgkkoF/dJXcX7wvP2Xp5KPIpzMD3pybqv0A7MKPLshyZEP3cB1tQkIAzhfMzstX7H3MxYs6UP3jWCfXuLISeyB9GJnI1jMKIHwVZ8jlVFng2qgVa7M1KwY6fY+9Uo8Qe+x/rSEf2PvwtVQzxZGOKBHtf8E0O8Cz9jbZFnqdEdEthqd8bjCeHPUgdb8CAeqzK50SHfhfsxpibvaswt8uzjPQJb7c6lgt3vd6kj7NpmdYuM4pZgxn5wDgpbj+UDcaJe2iVuo7D37TVRj8Z5hoZqBtZjUVfd3V3itmKtMGF3YwROxVnx90g822p3Tm+02p2HcG9s2B6Vr9jX48Vl62lD++gtOLbIs52x/VDB6pfD+gZmF3n2yzC8V+EFQ1uGhU3clNQsGE4cxBvNSXpjDC5OSi5OxP2KW4cTF3mX474kta0Zu7bEm8ORdIlcl6ROqIjXFXm2tS6v8Eedg9vw+IC9p5Lf+iCC35N4oCL+vSZX+eC7BaeE/4ijPqhx0AscOHCKvx+tdmeuMIcuPugEttqdMcLJWAMTmsIMX+LEPvmOTeLtSbytoqYOzjTkEXY28UHSOC+uoXWe9HJMTFLrkzjlnBhPWutwNoQzwhIfN1rtzjRhX1FimbDZ+a6C51DhcLE8wITVRZ5d2HWzVShz2wVHsxw7K3iPi+JuSHLTBwSj8Bqui8kphg4Q62AH7uiRvxPvCRuxI/BYH5zwFpY248w9W1jQ+8XPmFLk2cbuhpibEmv6xRuYVuTZ7tSwNjAVtwuOuupkfhBfCb3+cM3PEPcII3Si6s8QPwnv7lNYWvrLvwDDJFTPeZCYvQAAAABJRU5ErkJggg==" />Dashboard</a>
                                    </li>
                                    <li><button class="collapsible"><img alt="Online Booking"
                                        title="Online Booking"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEi0lEQVRYw+WYfWiVVRzHP7vdpr3oWmGMNYwQthwRI5PMtkJ7MXH942KFkfSi0KlDHIkgevOP/SfUTnHslAlKRWiZiBou7IV0FsW0P6LVQiWHIqQtK9zc1NYf5/e0p7vt3ufebXdCXxg75/f8zjmf53fPy+88JWTIOl8C3AMsBRYAM4EpFEf9QDfwBbDFaLU706EkA3Y2sAG4pUiAubQPWGm0+nEYsHX+XuADYJqYeoHPgZ+BX4sEeDVQDSwELhXbX0Cz0artX2Dr/BxgjzgNAhZoMVr9PglRxTpfDrwIrBLGXuB2o9X+Eut8GvgOuEFgHzFavTMZoCOALwc2CvQPQF2JdX4p8FHkY7RaNQlg9cBm4Chwh9HqTOxZK2Ck2pQCmqXSD7RMAuwCoA2oBOYA5RkuLcIG0JwG5kplr9Gqp8BB08BdhC2wG/jUaHUuw2cxcB2w3mg1ILZFwFaG1o42Wh2PtzNa9Vjn9wB3A/Vp4Bp5drBA2FnATuD6mLnLOt9otDooPlcBO4CLgMXW+fuBRcCHQClwHlhhtNo4yjCHBLgiBZwVYzl5SiK7PQMWoAbYJM8BTgEHpNxI2F8j2HPA8iywcbYzKcI+C1BXQIDnA7VSfhuoAtZJfQ5QD2C0Ok84Pb+JPSsFBoAHjFbv5xgnYutKAdHxV2OdX5gncFWs/K7R6hjwXsxWGRWMVqcEul1M/UCT0WprtgGEqUaqu1MSkWiBOOt8WQGRhrBo4v+HyWj1J2HuKmC+0WpnDtgywEn1HLAuZbQ6DLwixtlAm3W+kgmS0arXaPWm0epANj9haBMmgFeNVoejRfEycDNwJzAP6LTOv07ILQ4Zrfom6gUyIC8BZhHOhqeB6Nf+DHgJ/pv8TAXeAB4tcLwGo1W7nFp7x/E9NgBPRqdfFGHE8Jh1fjvwAiHik6lvgdVRlhYpnelltNoGbLPO1wh0BTBjlE5rgfuyDLoD6MwD8iRwHOgwWnWN5JAeraU06CKLrPPLcgBvSrDH5qXUeHZWDKXH3kVWrZb0tRs4Avwi5W6j1W8XCvCJWLla/obJOt9DyMOfN1qdTNr5uE8JmfsPAm8RNv5OwhUnU1cCK4EvrfOXJ+0/cYSt89MFpJqwkndlgd5MuEHE288g5MszgWuBJYQcuhZ4HHht3ICt83MJaWRFzLyGoewrp4xWJwjTZb/0uVbqZYSsLxFwzilhnS8FtsRgT8fa3poUeIQXOAv8IdXLkrZLMofnEX5GCFGdBtzIUB5dVCUBLo2VjxqtBo1W38uLfCL2QcIpdUEAfw1Ee2ardf5ZAPnIsoSw0puMVj8VAzjnojNanbbOP0y43U4F1ljn6wiXxj5gfTFAIyXah41Wu4AG4JiYlgHt1vmqJO2LDizQHYRvGF+J6Sagwzp/WzGBS/JtYJ2fQrhnrRDTAOHjYSEfYZ4DrgA+Nlo1TghwDPwpoBW4eCwREyUGLjiXMFqtBZ4ZB9i8NNZsLZ4iNhit2vNpbJ0/wtChlEj/6wT+oQJ2jOnFBo5/5XliDP38ndRxrFNiH+HqMxb1kZE7Z9M/2vBrQE2xnm0AAAAASUVORK5CYII=" />Online
                                        Booking <div class="sd-plus-icon">-</div></button>
                                        <div class="content">
                                            <ul class="sd-dashboard-side-menu-sub">
                                                <li class="active"><a> Darshanam </a></li>
                                                <li class=""><a> Pratyaksha Seva </a></li>
                                                <li class=""><a> Paroksha Seva </a></li>
                                                <li class=""><a> Accommodations </a></li>
                                                <li class=""><a> Donations </a></li>
                                                <li class=""><a> Publications</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class=""><a><img alt="Booking History" title="Booking History"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADtklEQVRYw8WYTYgURxSAv5mdaJQcssgmwZ+EKIFdJQkGD4kKOegimKBRQTwI609MKChjmZ+Dxot4EFE2pRaUAQmSk0YhMegeZPcShD0uJqiIaC7+hKhEdNmYRXdyqDds2Uz39IzO7IOmXlW/n29e9/Sr7gKAdX4S8BXQA8wGXqD58i+w0Wh1orJQEpCzwNIWAMQyBVgBjMMAX0Ygl4E+4HGTQTYBHcnFErBB9EvAe0ar/5pdEuv88mowRWCO6H2tAMmSolQHYIF1vjCRMAXrfDma/wqcAh41Oe8B4HXgPHAIGAMGSwmjFXK0ShbLAfBnMTpxC5jIe+bNuDI/AnuAN4CpLYTYAGgYv3kBMFqNEJ41LRPrfHdFLz5LoOctpUYdrfPTgA+At4BJwChwFRg0Wt1rCYx1fgnwDaGFtFUxeWKd7wf2G60GmgJjnX8Z+B5YW8O0DVgGLLPO/wR8brS6nydHrnvGOj8TGIxAhoEjQDfQYbQqEHpNt6wPi91aYFD8n70y1vmXCJ28U5Z+AZTR6q/Yzmh1F+gH+q3zuwEPfCJ+fdb5hUar4axceSqzH3hb9EPA6hjEOj/TOr89/vVyfrXYI/4HaiXKhLHOdwGfyvQcYIxW5YTZQaBXxrhSZcCIH8Bm63wnGVKrMl8TLuVjwqUpV7F5JTEmgZT4lwj/wvphrPNtwCqZnjZaXa9V5moifn0yXWWdT82ZVZkuoF30s42ARHJGxnZgbiMwsyI9T79qyzj3e0rc3DAvRnrW1uIfGd+3zpsUm9GUuLlhHkb6qxl23wJ3gQLQmwL0Wkrc3DDxpXknzcho9QehT92JgNYnzBakxM0HY7S6CVyR6boMaIxWFwitoAK0KGGyRsYrErfuykDY/QHMt85/nANoEeGlcFdlXfzeTcSrKrV602FgG+GBdsQ6P99odScD6CrwXQTSQWicAH9LvFTJrIzR6iGwQ6YzgAHr/AxyiNgNiB/ADonXGIwA/UDowBAa3pB1vkee0NUgStb5HmCI8QbrJU6m5N1cbSX0l62EfcsxYJ91/jRwEbgHTAPmASt5+lFwGNieJ0kuGKPVE+AL6/xvhO48XRJ+luF2G9hmtDqZ8wfX93ZgtDpF+FCwhbCRGkmYjMj6FmB2PSC5K5MAegQcBY5KB54OTCa0jFtGq7F6Y8Ywlb1GI2BjwI1GkyelCFwTfbl1fvLzCtxoZY4Bewn7jCHr/M/AgxYyfBjD9AJLCM2uS46JkHLRaDUKfATsJDTGZn9crAoCHP8fOQAYYZndV7cAAAAASUVORK5CYII=" />Booking
                                        History</a></li>
                                    <li><button class="collapsible"><img alt="My Account" title="My Account"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAGDUlEQVRYw62ZaYwVRRDHf7ssC4hcAUQRFCQgpwIRjBE8wBg1RlARRBFQQOmko60riqhRgQh4MWYnzgeUQ9yEoAFDghEkgHiACoRwqShgglxZzgWJu4Drh+7x1Rtn3ry3UMkm9aqrq/+vXld1VW0RdSTPD1oDtwP9gWuBK4AWbrkKqAR2AZuAtUarvXU9q6hAYKXASOBxYCBQXMD2bcA8YL7R6vhFB+n5QQnwJDAFuLKuHnFUBZQDM41Wpy8KSM8Prnce6BOzfAhYC2wF9gLHgfNAc+BqoBtwG9ApZu8+YKLR6osLAun5wTjABxoKcQ2wEJgLrDda1ebxRbtir8gEMvcWoBZ4G5hitDpfEEjPD4qAN4BXIwYrgJeMVn+mAUuw2xSYDJQBpWJpGTDcaFVdCMgZzlhIlcBjRqsVdQEXY78n8CnQNQL0gTiPFsUYGA/MEaKdwF1Gq30pBzcD2mGvxgGj1cEU/cYO6N1CXG60ejonSBckG8jcwe3AIKNVZcJB9YFx2LvWJ2JvD/ChO/h0jv2fAfcJ8Uij1aJYkJ4f1AM2Ar2dqBLom3T/PD/oCCwR+kl0AHjIaPV9gp1LgG+Avk50FOgmHSOT8VPiwFpgdA6AnZzHowCrgTMRWVtgtecHg+JsGa3OAMOBU07UEpgudYrdoaXYRB1ShdHqywSADZwHLxPij4E+RquGRqvG2Lw4w4EGaAAs9vygbQLQ3cArQvSE5wcdop58lMxLUkN2ZEdJAdcJj48zWo0xWm0Rh+4xWk0B7hSebQm8nsPuB8Afji8BTBTkGOkVo9X+FJAhzTVazU1SNFqtAyYJ0SjPDy5N0D0HvCtEj7jAotjzgzbYYiGkeUmHen7QHugiRLNIpznYYABohH0mk6iCzBVpDdwaenKw8OghYH0OIxJgpdHqtzSERquzwE8JNqK6x4E1QjQoBNlXCNekvMUlgq8mf5IRXz9Fd63gbwxByqdpW4qBA4K/3POD5nmC7Cn4/Sm6WwXfOQTZTgh3pxj4GTjp+BJgdBo6zw9uIfsnXp+y5XfBtw9BymiryrXbReAnQjTV84POOQA2AwIh2uByYi46FbHRpBioJ2TnSadpwAnHNwO+9fzg/hiA/YHvgO5OVAu8nIf9KIbikgjyxmkWjFaHPT+YiE0X9bAvzxLPD/YAPwDngF78/8mcabRanQfIJpHPVSXAQWcUoGMeRgAWA/eQfSevcX9xtAVbROdDVwn+iNGqthiQua5HmgXPD7pjf8bUoBHUG9iRVGREqJfgfwUboVuEcGCu3Z4fDMMWE40iS4eBH7HppQjbg/cguwHrBKzy/OA1YHqOfHyz4DeHIGWG7+L5QVej1S8xAEcD88kubJcB7wHr4g51bcIzwFh3VhEwFRtwz8foNyC7Ul8DUOxSgkyg42I2D8B2hyHAKuBBo9UQo9XXSV4xWm03Wk0AbiJT4QCUeX6gYrYMBZo6/i9gFWTe7IVCcbzr6kKAjbG5MUxVlcAAo9US8iSj1UbgBrJftNkyx7oOtUysLzVanZIgPyKTyJsDLwrlSdhGH+AsMMRolfZ8xgE9is0IYVvQAHhHqAwD+onP74eM7HGmk0m2Ndgg2uF+plZOPstolasgTiXPD8aSKQdrse/6MWwAt3Hy5Uare8M9sseZCYQ9TSmwCBghAFYDb10IQEcLcKnFOWkU9rqFAKuB5+SG/0C6tnOi+3ZgE7t8d5cZrY5dKEIXZAuEqAy4Q3yeZrTaFQvSGVhOdgkvRyEyVV0orUw4YyW2gcuiuPniZODzGHnOiUSBdChGtg07D/onupA0CyrFjkDkZOE0ttsrN1rV1BWdq5jKyZ5z7gAGG60Ox+0pymGsnjMWTbp7samjwmh1kjzIvSRDsfevX2R5BXa0kjj9zWeIOgIbQC0iS38Dq7E9yRbsUPQIth5s6TzVCxiA7b+j+2uwtembcT9xQSAd0FbYFDWG7GasrrQceMFotTMf5UIH+x2AZ4GHyR6z5ENngKXAbKPVpkI2FgRSgK2PbdwHkfkXSbuI2hFs0t6MTV9f5TvIvyggc4Bvii1ETuQzS8+X/gVl0OmyfYdbqwAAAABJRU5ErkJggg==" />My
                                        Account <div class="sd-plus-icon">+</div></button></li>
                                    <li class=""><a><img alt="Donor Module" title="Donor Module"
                                        src="data:image/png;base64,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" />Donor
                                        Coupon</a></li>
                                    <li class=""><a><img alt="Support" title="Support"
                                        src="data:image/png;base64,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" />Support</a>
                                    </li>
                                    <li><a><img class="sd-logout-img" alt="Logout" title="Logout"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAYAAAB99ePgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACdElEQVRYw83YTWsTQRzH8W/SgI8I6kEtKoIg+AZ8QrG2pwYR9ago1dvAiuutoqCg9NTDIoMDxpN4qdaLWj2LbRXfgCAoWigqglofKkKlHnZWhnGbTJrJbH6n3X+Y2U9md2aTKWEkkaoEHAYGgJ3AOtzzCuiJI/G+iTZ1UzFg3cAIsHeRfW0D+oDbXnGJVBuBSWBTC33N6z68pZJIVSYdsTzYF2AKmHPoazSOxBuvOOAIsMeqvwXOAI/jSPzxecFmcSdyYLviSHwsCpWlDOywamc7AZbhNhjnX4GxolEmzszrIp8xOxXr/Fe7LpRItQK4SLrkXI0jMduoTblhr/5yDhgEzgOPEqmWdxJuxjje7wIMibtOutibwLF6wGA4PdGOA3eMck89YMiRy4DHcoAP84BBcRbwrlE+kAcMjmsAfGACC8Fp4JwGjhrlXhNYcekokWolIIC1bXC+A2aBbMR6gfuJVIeccMAQ6U+oUOkDLrjeVtcv4TNdrhcdBD4B69uBIH32lhm1p8AVJ1wciW/AJd+qRKou4KYFGweqcSR+FjZbDdhADuwHFLSUaFjNgk1o2PesEByn/+3VgFMWrN+EBcctAJu0Ryw4Tm911IDTFqxfT7j/EnLkTubAqgvBQuNWGcfPNGymXoOQK/8N0nfzEmAo7xlrhFvaLlkcid/A5Wba2Ld1q16DOiJl4INxvhqoFo0ycS+s2rVEqmZ2NNuKu2XVtgDPE6kOFn2LS3rVHgd253zuunk4DwzHkRjBY0oAiVSbNbCVbdfPQLeelV5SBogjMUU6chMt9LUG2O4L9g+ngdPAPuAocA+Yxm0vOMsT4KVP3F+DGLw9lKtpHAAAAABJRU5ErkJggg==" />Logout</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="sd-dashboard-contact-details">
                                <p>For any queries, please contact Devasthanam Information Centre on</p>
                                <p class="sd-phone"><img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMjZiNzcxZi0xYWM5LWQwNDAtOTcwMi1jNWNkZTExYmE4MzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkE2RDZCNzY4QkM2MTFFQkI1OURENUYzMTMyMjdBOUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkE2RDZCNzU4QkM2MTFFQkI1OURENUYzMTMyMjdBOUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWJlZDdiZjctNmFmNS0yMDQwLWE1OTMtNDhjMjMxMjg1Yjk0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODNkNzlhZDEtNzc1YS0xMWViLWFmMzQtOWU5ZDkxNjgyNGEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RxgcyQAAAfhJREFUeNqElDtLA1EQhXc3QVQi8YGKlYkWwUbBQhRMYZfCBzbiD5FgI2KwkFRaKIIKloLiCwu1kaCNCFpKBJMopkuMxhdikvUMnIXrusaFL2Tvzpw7M3fu6G8Rn+bwVIEB0A78oA7kQBLcghPwYXdyOwiNgFHQCkrgFXyBetAFDDAGdsBeObFJMASy4AGYQOc3ieSZ7yIcBh1gznI2FCH5OMw0XKCZ66ZiYwk/gRSzCNvFQvwgQo0gBrZBC6M3bRmIaBEk6Bey0pRijzM1D7gBUWWzQfBYRjBL/5gYB4GP9ZBaHCkOS+AUNGjOj04/8e8XsQB3MB2MpcBt4F37+zF56gGDffTCXaQNupVdZ7lrvoyYTn+/iNUyMo0hBxmR7HjImlbQppINrNsyKci6wWN2KYvCBA9nBWyygVuY7gUDUE9Z/ucMXpEapUEzTG2ahgtgHXyCeTADDkCTUjPxT4pYnJHpSg3STHeWqa2yoa9oswy2GK3OForLzxm72Wu7PvegFyyCPofCV7MkXvqfuVmHDTDFUykqgmleqwi4BOdc7+Glz7B1pB8/rIsup9bJaZFQBA12v4sn3EP7PIVkRO3S/8fUiNLZmhrPStolvj/x3cuI9pWr92sEyTi5dphnBdp6uOEdWPtvnmk0OLZN2lpO2lS5SfstwAB22YTB+hmsawAAAABJRU5ErkJggg==" /><a><span>+91-8333901351
                                        /2 /3 /4 /5 /6 </span></a></p>
                            </div>
                        </div>
                        <div class="route-switch">
                            <div class="col-xs-12-1 col-sm-12 col-md-9 col-lg-9 sd-dashboard"
                                style={{minHeight: "708px"}}>
                                <div class="sd-profile sd-seva-form">
                                    <h2 class="sd-side-heading fw400"><span class="fw700">Darshanam
                                    </span>Booking</h2>
                                    <div class="clearfix">
                                        <form class="sd-form">
                                            <div
                                                class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12  xssm-pr-0 pl-0 ">
                                                <label>Select Darshanam Type<span
                                                    class="sd-imp">*</span></label>
                                                <div class="clearfix">
                                                    <div
                                                        class="col-xs-12 col-sm-12 col-md-6 col-lg-6  xssm-pr-0 pl-0">
                                                        <div class="sd-radio-select"><input type="radio"
                                                            name="optradio1" id="Annadanam0" /><label
                                                                for="Annadanam0" class="radio-inline">
                                                                <p>Athiseeghra Darshan (Only Alankara Darshan
                                                                    )<br /><span>Rs. 300.00</span></p>
                                                            </label></div>
                                                    </div>
                                                    <div
                                                        class="col-xs-12 col-sm-12 col-md-6 col-lg-6  xssm-pr-0 pl-0">
                                                        <div class="sd-radio-select"><input type="radio"
                                                            name="optradio1" id="Annadanam1" /><label
                                                                for="Annadanam1" class="radio-inline">
                                                                <p>Seeghra Darshanam<br /><span>Rs. 150.00</span>
                                                                </p>
                                                            </label></div>
                                                    </div>
                                                    <div
                                                        class="col-xs-12 col-sm-12 col-md-6 col-lg-6  xssm-pr-0 pl-0">
                                                        <div class="sd-radio-select"><input type="radio"
                                                            name="optradio1" id="Annadanam2" /><label
                                                                for="Annadanam2" class="radio-inline">
                                                                <p>Sparsha Darshanam ( Single Person
                                                                    Only)<br /><span>Rs. 500.00</span></p>
                                                            </label></div>
                                                    </div>
                                                    <p class="sd-EM mr-35" style={{left: "0px"}}></p>
                                                </div>
                                            </div>
                                            <hr class="clearfix"/>
                                                <div class="sd-profile">
                                                    <div
                                                        class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 xssm-pr-0 pl-0">
                                                        <label>Select Date<span class="sd-imp">*</span></label>
                                                        <div class="sd-dob customDatePickerWidth">
                                                            <div class="react-datepicker-wrapper">
                                                                <div class="react-datepicker__input-container">
                                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                                        class="" defaultValue = "" /></div>
                                                            </div>
                                                        </div>
                                                        <p class="sd-EM mr-15"></p>
                                                    </div>
                                                    <div
                                                        class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  xssm-pl-0 xssm-pr-0">
                                                        <label>Number of Person(s)<span
                                                            class="sd-imp">*</span></label><select
                                                                class="form-control sd-voilet">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        <p style={{color: "rgb(24, 24, 24)", fontWeight: "600"}}>Free
                                                            for Children under 10 years</p>
                                                    </div>
                                                    <div
                                                        class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  xssm-pr-0 pl-0">
                                                        <label>Mobile Number<span class="sd-imp">*</span></label>
                                                        <div class="sd-profile-mobile">
                                                            <div class="sd-phone-voilet react-tel-input">
                                                                <div class="special-label"></div><input
                                                                    class=" form-control"
                                                                    placeholder=""
                                                                    type="tel" defaultValue = "+91" />
                                                                <div class=" flag-dropdown">
                                                                    <div class="selected-flag" title="India: + 91"
                                                                        tabindex="0" role="button"
                                                                        aria-haspopup="listbox">
                                                                        <div class="flag in">
                                                                            <div class="arrow"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p class="d-EM "></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix">
                                                    <hr class="clearfix" />
                                                </div>
                                                <div class="clearfix">
                                                    <div class="heading"
                                                        style={{}}><label>Personal Deatils</label></div>
                                                    <div class="form-group col-xs-12 col-sm-12 col-md-11 col-lg-11  xssm-pl-0 pr-0 "
                                                        style={{marginBottom: "0px"}}>
                                                        <div
                                                            class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  xssm-pr-0 pl-0">
                                                            <label>Name<span class="sd-imp">*</span></label><input
                                                                maxlength="30" type="text"
                                                                placeholder="Please enter your name."
                                                                class="form-control"defaultValue = "" />
                                                            <p class="sd-EM mr-15 "></p>
                                                        </div>
                                                        <div
                                                            class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  xssm-pl-0 xssm-pr-0 ">
                                                            <label>Date of Birth<span
                                                                class="sd-imp">*</span></label>
                                                            <div class="sd-dob customDatePickerWidth">
                                                                <div class="react-datepicker-wrapper">
                                                                    <div class="react-datepicker__input-container">
                                                                        <input type="text" placeholder="DD/MM/YYYY"
                                                                            class="" defaultValue = "" /></div>
                                                                </div>
                                                            </div>
                                                            <p class="sd-EM mr-15 "></p>
                                                        </div>
                                                        <div
                                                            class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  xssm-pl-0 xssm-pr-0">
                                                            <label>Gender<span
                                                                class="sd-imp">*</span></label><select
                                                                    class="form-control">
                                                                <option style={{display: "none"}}>Select a gender
                                                                </option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                                <option value="others">Others</option>
                                                            </select>
                                                            <p class="sd-EM mr-15"></p>
                                                        </div>
                                                        <div style={{display: "flex", width: "100%"}}>
                                                            <div
                                                                class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4  xssm-pl-0 xssm-pr-0 pl-0">
                                                                <label>Photo ID Proof<span
                                                                    class="sd-imp">*</span></label><select
                                                                        placeholder="Select a valid id proof"
                                                                        class="form-control">
                                                                    <option style={{display: "none"}}>Select a valid id
                                                                        proof</option>
                                                                    <option value="aadhar">AADHAAR</option>
                                                                </select>
                                                                <p class="sd-EM mr-15"></p>
                                                            </div>
                                                            <div
                                                                class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4   xssm-pl-0 xssm-pr-0">
                                                                <label>AADHAAR Number<span
                                                                    class="sd-imp">*</span></label><input
                                                                    placeholder="Please enter your id number"
                                                                    type="text" maxlength="30" class="form-control"
                                                                    defaultValue="" style={{textTransform: "none"}} />
                                                                <p class="sd-EM mr-15 "></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr class="clearfix" />
                                                <div
                                                    class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12  xssm-pl-0 pr-0">
                                                    <p class="ml--15"
                                                        style={{color: "rgb(24, 24, 24)", fontWeight: "600", whiteSpace: "pre-wrap"}}>
                                                        Note: Pilgrims who book for Darshanam should bring the
                                                        printed copy of their receipt. </p>
                                                    <ol class="sd-terms-list">
                                                        <li class="active"><a style={{paddingRight: "3px"}}>Only
                                                            single person is allowed for single ticket</a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>All the
                                                            Pilgrims in group ticket have to report
                                                            together.</a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>At the
                                                            time of entry, all pilgrims shall produce the same
                                                            original Photo ID (Aadhar Card) used during
                                                            booking.</a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>The
                                                            pilgrims shall wear Traditional Dress only. Male:
                                                            Dhoti, Shirt / Kurtha, Pyjama. Female: Saree / Half
                                                            Saree / Chudidar with Dupatta.</a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>Reporting
                                                            and late reporting of Darshanam (after 1 1/2 hour
                                                            only on booked slot).</a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>The
                                                            pilgrims should not carry any luggage/cell
                                                            phones/electronic gadgets while reporting.</a></li>
                                                        <li class="active"><a style={{paddingRright: "3px"}}>After
                                                            completion of booking, cancellation / advancement /
                                                            postponement are not accepted. </a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>Entry with
                                                            foot wear is not permitted into the queue lines,
                                                            mada streets and Temple.</a></li>
                                                        <li class="active"><a style={{paddingRight: "3px"}}>SBMSD
                                                            reserves the right of cancellation of Darshan under
                                                            Special Circumstances.</a></li>
                                                    </ol>
                                                </div>
                                                <hr class="clearfix"/>
                                                    <div class="clearfix mt-50"><a class="sd-btn-orange">Confirm Booking
                                                        <img class="sd-arrow-btn ml-5"
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAdCAYAAABMr4eBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQ4y8XTPQrCQBCG4UUJeBZ/8AqWGo0mt7D1X68nCGJrYW2pFmIhaPXaBNSYgZ3dgF85MA/DMGOAJrAGdkDLuATY8s4DaLsge77zADpaJASeGejpAiUC1NVCcVHQQICiv0GRAPWLggZaqCdAsRbqClCihcKidtTJga5AUFI4R2PMLVOraKaoAid+M7IFagKw8gWWtkAdOPsADQFY+AJzW6ApADNfYKoBLj5AQwAmVkCKbHKAsTWQIgenU84gSfqNd2CoBj6gMhC49r8Af/2j9UHItyUAAAAASUVORK5CYII=" /></a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            
    );
}


