import React from "react";
import "./Footer.css";
import navbarimg from "../4.png";
export default function Footer(){
    return (
        <div className="sd-footer-main">
            <div class="sd-footer-middle">
                <footer class="text-center text-lg-start sd-footer-middle-f">
                    <div class="sd-container-r">
                        <div class="row"
                            style={{ display: "flex", justifyContent: "space-between", textAlign: "initial", backgroundColor: "rgb(239, 239, 239)" }}>
                            <div class="sd-list-body w-16">
                                <h5 class="text">About</h5>
                                <ul class="list-unstyled mb-0">
                                    <li><a class="text-dark"> Overview</a></li>
                                    <li><a class="text-dark">The Temple</a></li>
                                    <li><a class="text-dark">The Temple Story</a></li>
                                    <li><a class="text-dark">General Information</a></li>
                                </ul>
                            </div>
                            <div class="sd-list-body w-18">
                                <h5 class="text ">Sevas &amp; Darshanam </h5>
                                <ul class="list-unstyled">
                                    <li><a class="text-dark"> Overview</a></li>
                                    <li><a class="text-dark">Darshanam </a></li>
                                    <li><a class="text-dark">Paroksha Seva</a></li>
                                    <li><a class="text-dark">Pratyaksha Seva </a></li>
                                </ul>
                            </div>
                            <div class="sd-list-body w-18">
                                <h5 class="text">Donations</h5>
                                <ul class="list-unstyled mb-0">
                                    <li><a class="text-dark"> Overview</a></li>
                                    <li><a class="text-dark">e-Hundi</a></li>
                                    <li><a class="text-dark"> Trust</a></li>
                                    <li><a class="text-dark"> Trust</a></li>
                                    <li><a class="text-dark">Lakshmi TV</a></li>
                                </ul>
                            </div>
                            <div class="sd-list-body w-18">
                                <h5 class="text ">Online Booking</h5>
                                <ul class="list-unstyled">
                                    <li><a class="text-dark"> Overview</a></li>
                                    <li><a class="text-dark">Pratyaksha Seva Booking</a></li>
                                    <li><a class="text-dark">Darshanam Tickets</a></li>
                                    <li><a class="text-dark">Donations</a></li>
                                    <li><a class="text-dark">Accommodation</a></li>
                                    <li><a class="text-dark">Publications</a></li>
                                </ul>
                            </div>
                            
                            <div class="sd-list-body w-15">
                                <h5 class="text ">Support</h5>
                                <ul class="list-unstyled">
                                    <li><a class="text-dark"> Overview</a></li>
                                    <li><a class="text-dark">FAQs</a></li>
                                    <li><a class="text-dark">Facilities to Pilgrims</a></li>
                                    <li><a class="text-dark">Connectivity</a></li>
                                    <li><a class="text-dark">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="sd-additional-footer">
                        <div class="left">
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAYAAAAWl4iLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACRUlEQVRIx62VT4iMYRzHP/MOl8XaZQ+SK1FLPQeltly0B9m4cKWeu4Oau4MUWks5bKFv+ZMDUdjCwSZqQvJatJQ4KCZmMtq1DovJYZ5Zr5nnmXlnZ7711ju/7/f36Znned/fmyEga20vMAwMAeuB1cBv4CvwEcgD9yTN+vozHuBSYL+7ltFcc8BF4JKk+SDYWrsKGAW20J5eAjlJ3xrA1tp+4AKwtk1oTZ+BA5LKANnE3z8NbFgkFGAFsNkYczeO40rkinsB0wG0JuNYZKy1PcAtoC8QngVuun2E6v7vcSv06TuwewmwvQn0DXBIUilRm7TWXgZOAZs8PX3AcOTAPv2ketKlesPVci7j01BE9eH3aULSl9BmOm8iYG+MgIGA+ZrWCmUGIqAnYFZSgIOZCCgFvMEU4FCmGAHTAXPEveJeOW8kYL+NgOcBczkwaq1d6YH2AiddxqcnGWvtGuA2nknnVAau8e+gBoF9QH8g/wfYmXErGAe2ptjTNHogKVebFde7BAW4CtWnAmAS+NAF6LSkpwtgSRXgXBfA52s3UaJ4H3jXAfSFpIcNYLfqM4uEVoCxZCG5YiTlqe53u7oh6b8XLfKExgiPQ5/KwHh9MVtfiOP4hzHmF7AtJfi4pFf1xSgQvgI8SwHNS/LOZC/YHeRhYKYJdAY4EjKzISOO4zljTAHYEYgclTTVNtjB3xtj1tH4+boj6Wyz3ojWOgEUEr8/AcdaNWVbBeI4njfGTAG7qI7Eg5IKHYMdvGiMKQKPJT1K0/MXHauyhiIku0sAAAAASUVORK5CYII="
                                alt="main" /> Devasthanam,</p>
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAYAAAAWl4iLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACRUlEQVRIx62VT4iMYRzHP/MOl8XaZQ+SK1FLPQeltly0B9m4cKWeu4Oau4MUWks5bKFv+ZMDUdjCwSZqQvJatJQ4KCZmMtq1DovJYZ5Zr5nnmXlnZ7711ju/7/f36Znned/fmyEga20vMAwMAeuB1cBv4CvwEcgD9yTN+vozHuBSYL+7ltFcc8BF4JKk+SDYWrsKGAW20J5eAjlJ3xrA1tp+4AKwtk1oTZ+BA5LKANnE3z8NbFgkFGAFsNkYczeO40rkinsB0wG0JuNYZKy1PcAtoC8QngVuun2E6v7vcSv06TuwewmwvQn0DXBIUilRm7TWXgZOAZs8PX3AcOTAPv2ketKlesPVci7j01BE9eH3aULSl9BmOm8iYG+MgIGA+ZrWCmUGIqAnYFZSgIOZCCgFvMEU4FCmGAHTAXPEveJeOW8kYL+NgOcBczkwaq1d6YH2AiddxqcnGWvtGuA2nknnVAau8e+gBoF9QH8g/wfYmXErGAe2ptjTNHogKVebFde7BAW4CtWnAmAS+NAF6LSkpwtgSRXgXBfA52s3UaJ4H3jXAfSFpIcNYLfqM4uEVoCxZCG5YiTlqe53u7oh6b8XLfKExgiPQ5/KwHh9MVtfiOP4hzHmF7AtJfi4pFf1xSgQvgI8SwHNS/LOZC/YHeRhYKYJdAY4EjKzISOO4zljTAHYEYgclTTVNtjB3xtj1tH4+boj6Wyz3ojWOgEUEr8/AcdaNWVbBeI4njfGTAG7qI7Eg5IKHYMdvGiMKQKPJT1K0/MXHauyhiIku0sAAAAASUVORK5CYII="
                                alt="main" style={{ visibility: "hidden", marginLeft: "3px" }} />Lakshmi - 518101,
                                Tirupati (Dist.), Andhra Pradesh, India.</p>
                        </div>
                        <div class="middle sd-border-g">
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAYAAAChWZ5EAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAB7UlEQVRIx+2VTYiNYRzFf++9oka+FkPZkAUWUv8yC8nGgg0LCwtCOWnkY1jQrGZp1PgobFgdlIaajZSIbDR3QXKzsWAhQoqJImzMtbjPrbdp3M8xNnNWz/t23nPO8//ozQAkbQBOAvOYHvwGLtgeLkjKbJeAPcCraTAfAw7aHgYoAIOSumy/AwTc/4fmz4Hdtp9JKkjqLUbEELAxIh7bHiuXyw8j4gfQkwJOFW4CA7a/S5oPDAHbM0lPE+FbIpQAJPUAp4BFHRr/BAZt30u6K4GzwFKAYkT0JuIcYEtEVCKibPt9RDwAAuhu0/wtcMT2k2S+FTgHLKwR8gEAMmAdsDoiRm1/iYg7wGJgVYvmj4Cjtj9Kmh0R/cAhoJgn5VswEW+AE7Zfp/Q7gOPArAbG48Bl4IrtiqQlVPu9ZjJyvSFbBlyTtAnA9ghwAPhc55uvQJ+rqKQ5uv4380YVqKECXAUu2R6X1J1utHYC7wXQn0qeAXuBww0u2dSaZcA+4KKkBbY/pUqM5Di3gP3JfC5wGuhrRr+ZCuTxgepcvASQtA3IbN9OzyuAM1Tb1xRaDQDwi+pe382/lLQZGAC6WhFrJ0ANN4Dz6XwM2NWOSKOVqoedwPp0Xt6uSCcBOjKuYSp/NjMBZgK0HWD0P/qX/gDQi6h9SWbILQAAAABJRU5ErkJggg=="
                                alt="mail" class="sep" />saibavesh5559@gmail.com</p>
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADsklEQVRYw92YX4hVVRTGf/c6jKZ5bVSkAqUyixTCaDLsj8WQFyIqSmoe+oN8YKFE9FBJUT1E1EBRD0Uv0QdN9FKZNC+BIzaaDFLSVFSQgQalZUyjjTNWg3fqYe/jHE73nnvuhQj8XtY5e6299rfX3mvvdU6JFiFpOfA4sBSoAJ3ABHAU+MT26636LBcYdK6k+1JNDwJXAkuAOdFHBVgBbIwkkbRG0poiJDpyBi8BtwJbgCPA25IWAzc2mdRdQF98fk3SMNBn+0hLkZA0D3gReAZYDOyKqpsLRK8qqRPYD4wD1wDvSFpXmISkLuCNzIx3R3lDgehWgNW2TwF7Y9t84CVJG4pGohu4MPU+avtHSRXg8gIkANZG+UVmrDskzWpKwvYgcDewA5hOOVpFgY0ccUWGxM/Ac8D9tmtZ41LyIKkK3Aa8bPtgbFsKnGX7gKRNhMwoginC0tWA64G9tmsxCr1Rt9n29GkSkmYD2wlpdwr4EOi3fThFchlwLXAZcDFhw1YIGXYSOA4cBg4CXwI7k0Hi4FVAqaV+wfa2NIle4LHMbGqEDfm07b8KRuBfkNQDPAKcn1H9Atxuu5acE3fW6T8L6AGeis6eB34CvgMOAWOEFISw++fHSK4ALo1LsAtYWYcAwLlxqYY6JF0ALG8wkd9tT0k6O4azFUwQzpffcmyqwFAZuCrHaCzKhW2sxDkZH/XQDSHlLskx+iPKeW2QqEQ5mWOzUFJXmbDLG+HPKIueD2kkfcaa2C1pw/cZipKkVwipUg/7bD8kaRXwVou+h20/LGkl0J9jd08ZGM0xSDbXdBsTTPo0y6xfy8CBHIO5UU7SOpKDLC+zxmwfKwOf5Rh1JcZtkDheIBL7Acq2fwC+b2C0QFKn7QlgEDCwlXDV3wRcbbsbWAfcAjxAqMgGmLnGF+WQGISZGvM94MmMQXKBlQBsP9HIk+2ThJv0KPB5Rv0toUatd4HtgZlbdA7wAa1f5Quiehw4EUkUvcr7bL9/mkQ0/H+Lmizi4Jvjun9se6uktcCrBUl8bXujpIuAdwnl3ZvAQDJwGvWq7fWxYzXqV0fVNxQ/L0aiTPqeR6hL+gsVuoS0OZR6XyRpme1x4KuCJPZlSBAnsL1eoVuv2j4GbAKGUs3Jh8tummMcGJHUAVwX204AjyY1ZZFIYHuSUHM+SzjWe6LqI5ovyQ7bU4SCpQIMA/fa3tOoQ8NvUdt/AwOSdgIbYtuopKEUqSymCWdO8rzF9qfNQldqZpDFf/Fr4B+xb1KQ7QVb4gAAAABJRU5ErkJggg=="
                                alt="mail" />www.devasthanam.org</p>
                        </div>
                        <div class="right">
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADCklEQVRYw7XXT4xeUxjH8c/cqWEGTfyJkHaGhQ6aEKea1KISIdGwsLGpNEqeBdoQEhaC2ImkTSyKaEROVBNEEAmhEQukK23cWDFtIk1GY0OHCZ3oX4t73/H2Ne/bO+P2tzvnPPc+3/vc8+d3hjRURIxhPdbiOlyFizGEWfyCKezH3pzz0SbvHWqQeCUexD04vyHv3/gMu3LOPy8JICJGsAUbcV7TSvXoON7D6znnY40BImIc27BqiYl7dRBP55wPnxUgIq7HDlzaUvKOjuDxnPNUX4D6yzMuaTl5RzOInPN0p2O4K/kIXsPKc5QcRrEmpfRpWZYnoega3ILJPg/O4ruWICbxcKdR1F8/jvv7PPAntuIRvN8SxKZ6ec9XYDOW9Ql+Puf8Y875NLa3BLFMtbcYqv/9lxhbIHAq57ypuyMihvAM7vufEHPYUGBNn+TwQ29HXYl3W6jCKNYXqv29n0Z6OyLiCrzcAgCsLXDjgIB1ETE/NyJiOXZioiWAVQVWDAi4DLd3te9oMTmMF7jwLEGb64kH+1TLsi2NFQ2CVuNeqA+TF3CqLYICfzWIeyoiJmqIb1Qn5ekW8h8tcLhB4Bi2RcRFNcQHeHGBSszgUXzUEGC6UNmoJroW2+uNS875YzyJP+rx37E157wfLzWEODicUhrFnQ0hVuCmlNLXZVkeK8tyOqW0p67ijpzzISjLUkppLy7HDQPet3uoNptf4IKGEHAIz+acDwwKqlfPq1i3wPAc7ipq9/r5IpLDNXgrIh6KiEF+8Ur99409Oee5zjLcjROLhBjBY/gwIjZGxBkWLiJuxpsq+96rE3XOfy1ZRDyBBxYJ0a1T+B6/4WqDDe2unPMrnOkBduJWS3fCBVKDuAN4o9OY94RlWZ5MKX2LDaqj8lxoRuWMj/wHoIaYTSntUx1AbUN0bPlP3Z3DvVFlWf6aUvoKt6hOwzZ0cKHkCwJ0VeIT1Uxf3S+ugY7jHTyXc55ZKKDJ5XRCZVrvtvjL6dvdl5AlAXSBjOE21fV8UrW+l9fDS76e/wM9Q+pvTENQygAAAABJRU5ErkJggg=="
                                alt="number" /> +91-8333901351 /2 /3 /4 /5 /6</p>
                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA1klEQVRIx+2WPQoCMRCFv9Vt7EQQ9gSewiMsCB5hSo/gASzFQixfYWEvWHkE8QTWotZrLVhZuOwPSHZjkVe+CbxvEiZJRInMLAEOuFEq6VFU6DgK+FkBIK6oZcDCUU7mu9FSRWY29QkQA3PfAG0qA55ADxhA+1OwlTQBlh/D+xhGZnb2CeB9BwJAACi6iG7AtaG8EdCvAzhKWjeRbmYrYFwH8FncBRJH2Q9Jr6JC1VswBPaOAFIg/An/EyAGZjnv3mDeBth9AUg6tdWtpEve834EASAAvAFrkybs0/ZK3QAAAABJRU5ErkJggg=="
                                alt="print" /> +91-8524-287126</p>
                        </div>
                    </div>

                </footer>
            </div>
            <div class="sd-footer-bottom"><img
                src={navbarimg}
                alt="" /></div>
            <div class="sd-footer-tag">
                <div class="left"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADYklEQVRYw82ZSWgUQRSGv+mMEoxCQCSiBsWDehCKckFBEFwiKihxyVVQEQxSbiBuB/EiOZgcUnhxOYi4IYigBxGJGgUTBCt1M4IKbkTFLYmKMaKH6tHO0DPp6elk8p+mq15Vf3lUvX7vJUUMCalTwBxgGTAPmAFUA2MBD+gBuoAnQAfQAjy0Rv2O875UgXBVwA5gEzC1wHe9B84D2hr1InFIIfV44AiwDSiP442A+oGLwGFr1KtEIIXUtcBJYEKRcNnqBfZao07FhhRSlwGNwM4of0wRugxstkb9KAhSSF0OXADWDSFcUA+Atdaoz5EgfQ9eBdYOE2BG7cBSa9T37AkvxLixBIAAC4BzfnjLDSmkXoc7g6XSekBlD/6jFlJX4oJvVYIvfQecwZ25N75TyoAKYCVwMGTNd2B2MJamA5NHEwY8C9TnurVC6nE51o0BmghcWs9fMBnYniDgNQYJK4OoVkg9dwAkUA+MTgiwD9htjfpT5D67Mj9S/m16QeHf4ly6bY2qCZsQUlcDo/zHJcDpPPt8AyZao3rTuGwmKUCAhyFwFcBdXMYUVRXAKuCKh0u3klRXyNiKAgEzWgruTM6NsTifws5i3KghM5CzEoYMU9wEZWYGctIwQMZVpZC6Ig2MK3KjBuBL4LktxKYNOJA1thhYHWH/sSkh9U+Ki5FTrVEvC10kpG4C9kQwneLhMuRSaHpEux6P8JAxHJoWweabNarbAzpLBBnFk8/AZUGPKa5MqBdSfwk837JGmaCBkHohUBsYGkW0C/soA3mnSI9k39puwGSNSWB/jL1bwMXJdlxyOtLUB9wE8KxR/bjOwkjTdWvUJ/ifT57AdRZGkpozPzwAa9RzRpY371qjWgdA+jqEO/Sl1m+yvkT/IK1Rb4F9pSYEGqxRHaGQPuhJ4FIJAe/hqtYBCutgbAXulwDwKVBnjfo1KKTfi1lDSK0yhOoEllmjPoRNhnkSa9RXYDmucTXUagUWWaNe5zLwck34Ht2Iq3/jFvn51A8cw3nwYz7DdL5Jv8BvFlJfB47jEpEkGqotuC6vjWKcjmLkN482CKkFzrN1uP80FKI+4AbQbI26V8jCSJABWAtsEVLvBGpwdfF8XFVXmWfpDeBSrk7uYEqsFy6kHoPrOvy0RiX65foLLY7scjuSY3gAAAAASUVORK5CYII="
                    alt="icon" /><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAELElEQVRYw8XZf+hdcxzH8cf30ubXKJGNrBTZZI6DNMIkmaYoMw0jPyJ/+BSZ/CgiEn8o69SKIr9Gk1+bZgoT8QfJp48xGTX8wdZm2oZt9oM/zr263+t7v/ecu7t9X3X+uOe8P5/P83w+5/N5/7hD+lSWF0fhQpyLqTgBh2ACNmMLVmMVPsaKFMOGfsYaqgm2H2bjZlyARo3mO/AensbSFMM/A4XM8mIIc/FQc8b2VCvxQIrhrYFAZnkxEc/jogHAdepN3Jxi+K1vyCwvzserOHIvALb0M+akGD7vZtD1m8ryYg7e3cuAMBkrsryY2c1gxJnM8uJSvIH99jJgu7ZjVophRU/ILC9yfIKD9iFgS5twZophdVfILC8m4EscPwaALUWcnWLY1rrR+U0+PMaAkOPu9hv/zWSWF9Oab7Evv8Nu2oapKYYfGT6TDw4Y8FtcjxOb13VKF9lSwvoubQ/Ava0fQ5DlxWSsMbqbi1iMxyoAvoMrUgxb229meTEet+Jz7I+PdD+rt+KYFMPvLah5evvh5SmGx3EHdo9itxHXdgJCimF7imFBcwZvweuj9HMgrtQGNrvC7KxvDvSkMvr5qYvd4hTDxtE6SjH8oFyRGT3GvBwaWV4crtxRvTStbZAPleHZ/BFgv+vVUZYXmTJ86+XNzsnyYlwDp6oWDc1pBhst0K0phidwHKbjHryEKjHj6Ti8gt1BOGl/TKlgTBnALszy4oYUw6Y22H/wWfOqqqNr2E5p1GiwJMVwOf6qMcAgICc1lOF+Fc3J8mIoxbBjAJDTa9hOaKieAkzT4a76UZYXxyr3QVU1GsqEqaoezfJiYZYXdZarUzeol1ttaeDXGg2GlN6i6icyTFleHIpQs9naBr6v2Wiucqf3o4dxRM02qxvK+LFyeomZeK39zKyiLC8uwW01Abfjm1aAsRIn99HBIoQUw6jHUpYX05X50mE1x/g4xTCjtbOX1Gy8CnfhtgqAlymLAnUBYSlluAQv4D7dd90GPKUMrb5JMfzSq/dmGeYR3KRmpaSpncqVGhaZL8OsURrtxtt4Du+nGP4YAWwczsLVuAYH9wHX0qIUw7xOyLPwacW33qk8FdbgT+VSHqWMA8bvAVhLu3BKimHVMMgm6IvKAHistSDFcHvrR6dLnI+1Ywy4Bve33xgGmWJYp5zJXWME+DeuTDEMc9X/Cy5SDB8oD906B/wgtAvzUgxfdD4YMYVdt3b5FxMnzdqIi/V3fNTVTtyUYnhlpIe9Sn9z8Yy9WxfajKtTDMu6GVQpop6Ml7UlYgPUZ7gqxbBmNKOeAW+K4WuchjuVOfUgtE5ZJDi7FyD1C/sTmp3fqHoC166VSvf67EjFg4FAdgCfoSwSnKfMwScbvjK78KMyGPkI76UYvupnrIHt3ObfJ4cqN9lf2JRi2L1nvZb6F6sQNJ+3cszYAAAAAElFTkSuQmCC"
                        alt="icon" /><img
                        src="data:image/png;base64,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"
                        alt="icon" /><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAD5UlEQVRYw83ZS6hVVRzH8Y8nTbo+0sJXE3tIFFbbLQYVEWoODBEUctCDalCTbBclOIkeRDVokOSmlAYR9qBBNVAiElOoSLHHakER3sDkosWlDN/mI22wz7Fzr+dszzme6+0He3DW+q+1vvu/9vqvtf5nhA6VpPnFuA3zkOJaTMZ4nMQh9KEX27Alhix2MtaIDuCux6O4F5e12bwX67AmhuyvrkMmaT4DL+FuVDrxSJ0OYTVejiE7fN6QSZqPwAq8gEvOE26w+vBIDNnGjiGTNB+P97Goy3D1OoUX8XwM2em2IJM0n4pPMWsIAev1Hh6MIfunJcgkzS/FV7jhAgHW9C4eGOzRsxZAkuYX4cNhAIT78czgwkar9FksGAbAM+MnaT6vvmDAdCdpfhO+w8hhhISdmBlD9jdne3L1/wAQrsbK2o8znkzSfC62lDQ8iq3YpYhvR7BfEZhPVG1OVH/DhLr+ezAG4zARUzETszXfGPZhegzZgXqvrSgB3IqlMWT93XRXkua3YD0mNaiegIfxaqVqPBkLm/R1HMu6DQgxZNvwWInJQ/zn6iWaf4vfxJDt6TZgnT5R7DqNdGOS5lfVIO8s6eSnIQRUPWDsKjGZX4OcXWL0WyuDJWm+LEnzaR2y9pXUzakkaT4KV5YY7W1xoCXoTdL86STNR7cJWTbGdRVMUR4bD7Yx2FjFiebHJM2XttHuWEndtIriuF+mE9rXDHycpPmWJM3TFuyPlNSNq+jgCtGGJlefc+lUSV2l4tzT2ck2uQ9PIokh+6wF+7EldQdHor/6JpUOOhisk3gTz8WQ/dlGu7KF1l+JITumPARc3uJAX2NWDNnyNgEpv3XuqE3l95qHoSmtjBJD9nqbYPW6oqQu1KZ4c4nRkJ7QqzH1mhKTzTXIDZqvsDlJmk8cQs47NF+cvTFkP1cghqwPXzQxHIN3kjTv6TZdkubTsabEZJ1Bb7AKc5sYL8LOJM034VfsUWxlh3C4+tR0soFnJigSCz2KhThJ8RktqpY10lFFpBjQ2Qb8oPk9ewru67Y3S7Q2huwP6mJj9a77OE532msX1a9I6xgAWQX9EmuHmxDLY8j2NYSs6inFtA+X3ogh+6i+4CzI6l13MXYPA+B6xZ4/QA336xiy3Ziv/FjfbW3EPTFkx1uCrIL+gtvx7QUAfAuLY8ganitbSaKOxiuKq+f5ZngH6wCeiCF7u8yonXT0zXgNt3YB7pQiObsyhuz3cxl3kthfoIinCzGqzeb78QFWxZDtaLVRx1eHJM0n4S7FAksUf5EM3uL2Yge243NsqmXK2lFX7zfVHHuPYv8+HEN2tBv9/guxowzO++8oxQAAAABJRU5ErkJggg=="
                        alt="icon" /></div>
                <div class="middle">
                    <p class="border-r"> © 2024  Devasthanam.</p>
                    <p class="border-r color">Privacy Policy</p>
                    <p class=" color">Terms &amp; Conditions</p>
                </div>
                <div class="right">Developed by <span> ehheeh</span></div>
            </div>
        </div>
    );
}


