import React from "react";

const About = () => {
  return (
    <div className="Abouts">
    <div className="About">
      <div>
        <div className="h">
        <h2>Welcome To</h2>
        <h4>A&A Car Rentals</h4>
        </div>
        <div className="p">
        <p>
          If your personal vehicle is out for servicing or repairs, you are in a
          new city, or if you are fed up of being driven around by cabs, you can
          opt for self-driven car rental services; through A&A Car Rentals.
          Depending upon the purpose of the car hire, you can choose from
          sedans, luxury vehicles, hatchbacks, SUVs and MUVs. Self-driven car
          rental services listed with us at Gagan Self Drive Cars are very
          prompt in their response and are among the most reliable service
          providers in Chandigarh.<br></br>
          <br></br>
          There are several rental companies that you can compare and contrast
          to choose one that works best for you.
        </p>
        </div>
        <div className="booking">
          <div className="booki">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAAAjVBMVEX///8AgAAAfQAAcwAAfAAAdQAAdwAAeQD7/fvx9vFXnFcAcgA2jjaEtIT1+fXh7OGxzrF6rnrI3MjV5dXp8emZwJnf699Ml0xwqXCfw5+mx6Y7kDsjhyNVm1VopWi91b1foF+Puo9ElEQWhBYqiirC2cJrpmsAagAfhh8viy91q3Wty62awJq30bfM38x2vrDXAAAHwklEQVR4nN2d6VbrOgyFUcYO0BbK1EKhhQOH4cD7P95NWpqmieTErS/yzveXxVratSzLsuycnHSM3ljbAteM59oWuGb+oW2Bawbn2hY4Zpx2TdH87622CY5ZDjum6JriB20b3DIL04W2DW4ZJOlA2wanXFMU3Wgb4ZRZSNGdthFOGSQdU5Q5HQVv2la4ZB5SpqinbYZDHpJMEY20zXDH+DnKFfW17XDHJA6IKO2QotuYckXd2cT239NcUXytbYgzLtJgrWiqbYgzVmEuiIYX2oa4oneTbhS9aFviinGWMOSEn9qWuGKycTqKZ9qWuOI83ihKVtqWOGJ0uplG1Jli0DQKfhR1pdDw+TONqDPb8u00ouhJ2xQ39O5+phEFf7RtccM4CLaKqBtbvset02Vu143txCosFCWX2sY4YZAWirqRfI/uo0JRN5Lv6zQoFIUTbWtc8LWbRpRcaVvjgtUu1HUkscsrdYWipbY1DthlDF1Jgy5pFxi6USeelkJdNkgdqBN/DUuCKO5A0nAV7in61rbneD6SsqLwS9ue41mkZUUdqJ30TqOyohS/SaP/vKeoAwvSOCoH7y4cxU73AkMXDsVewn1FIfwR0qSq6FHbomOZVRTh75DO4n1F+IXi80pkCOA7aW5TqoC+n1hWFcXoHQCLqqIQ/Sz2pqoIPtg9RRVFEXqwO60qgj9xqSmCLzXUFYXg1fy6ogT8zk5dEfo2tq4oONW26TjqiijFDg03dUVD7NDAKEqw+50GtdyboqW2UUfxUFcUPGsbdRQfdUXg5fyzhFEEXT25iuuKsE9jPxlFwbu2VcdQrUBu4jdyYfWbUxQit56MmchA6Zm2WUfQr+cM6MkqBYwk6InEJN/gK9KAU5Qiv9RwxqRBFNxrm3UEM2aJxU7t2CWWEuBbLmN2jCLg7vwRFxkyScCHLu/cgkQhcIPQkh0k5ERoxWV20AX9RzbYIZ/18cGOUtwaV4+NDBQA9zw98ZKA8+9zLrPLFOHeOJjwEwk4bbjmgx3wGUWPF0QxbmcDcz6xdjvcPoAVHxqAs9ULYSLhul1fGiNctzvl11hKYd1OWGMphr1z8MKvscCLbJ/dImUksIusNJFwczu2DJkRwL46yJ4irWMDaiWyx+dBWfz+p23aoSwESbgFlLkU7WBvhgjlk2xJgq3b3QvxmwJtyw5Fit+4CfhUit8BbCYkeR3FqFWuW3FJQi2uSvk37pmsmDbgPlDDnyMR8Ob8S3I72FJkT1qRKEW9dyC6HWy6+ii6HWpskKNd9Kpt24E8iJJQKygXcrRDzRvE3I5Q2/TP5bwBtBdXOu3LAjjqB1DeRL8LQctcV2LegFpv6IvRDvbk5UZ0O9Tk7lGq2/mx8esfUPQQ47cfAXyRvtmGKHlJ8uKc4iuhILFrzxyLS5IXHXej9awYWs1p6XAsC+A+XB1bbMyLLWyZiLHBiwy8MM/iM27iIuvFYdJo94NHbS/nybGB6H81th2L8tOiz628xhAbEg/6G/ZnRbtPNgldnuRHCWVUfYQqaNYk5w1ePOW5qP7gLTTJW1kfVlkmGDf6ntRvR15884ltkGl47bEvxwYfauA1t9tYZnzUTS5zUah/PiblAKanvKfyxs+DvazYl2V631ZO7nxIheRtqXx//EsO4Kn+22mG1FO+HCH/ChT9rvkMstvlCFfI/xnyVf2Cg8Ht1hZy06maa+zx6wqqGN0uh+tmMmTgqXpjpNntcpgV91JeZUn/NeYGt1v/7rUINjAEcPWXARrdLqda2DassvovuzS73drOSl5tWmXVS3ct3C5nv/HsRf4d9F8N+Ww1SDnl/3ozaNfe+bVzu5xyhJjIq6z+zq+l261//l0mavgn9Q6H9m6X5W3Fy5YzjwepvdvlFC+qyor0B8nC7Wj3bLl8iKnfvmrjdjmbWmNPXmXVW9vt3C5nvQ1ayfmq+iDZuV1O/oqG6YfQHqT50FoShWPTpiJY6io6uZg9RInh2IE1+mnk8Uxa830b24kK/hj+ttSWs2F0Ftr7H48HJeMfLp+sIx+LV+1Pc8P8aI964rDHmCzDBIN6dlflzpC3IQ5SDvNyNPYgZbwep8m/QTphvkVjNUh+flxIugzbBsu2o1/DUMnCHCTx8a02g+TtXczLA9dcH7o2JOS7LeZBUq+CGxCv+Rrx+wbC3QHzSf88yYh9QcL/q+f208mDk9kGXm1X3FTb4mZsFen3ODTybed6CcKlClO7ag0PuoXaYDNIoX63UBssXC9CeYbe0GhXHSSUO2TyZfMKvpQjW9CqGYI83Z8LtMv1oN4xNvUI7dBv27ChzTbD560fRwvPSz24VWGDoXW1QNtGW+QbIttB8n5XUcVwj2dDom2hPQ3payR3kHtLQw4BkrDuMzdpijC/lmvou/PizuwByO+heHmg1Ar+ClCOr2cVjYipHlouVEIK5Gi5UAkpkPteYTXBB3If7mofDhvIY4TinQgXyEGKdyJMIIepCwnUjzuB6kICtUCOVBfiqQZy/Zsix1MJ5MDL7I79R8iQl9mCvbo/9jJbUA7k2MtsQSkjhzl+aeKsCOSgu1mGrSTY3Wyd7fEMVmXfzE+3nt/9QnZsbgfjFY1NfOTTCaAVxYI81UPfKFX5THC/NSTxjvsdMonrv6j1SBm/j1/+A0Q+U0i8vZRtAAAAAElFTkSuQmCC" height={"20px"} />
          <h5 
          >Easy booking process</h5>
          </div>
         <div className="book">
          <img src="data:image/png;base64,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" height={"20px"} />
          <h5 >Go Anywhere in North-India</h5>
          </div>
        </div>
      </div>
      <div className="jpg">
        <img src="https://www.chandigarhcarsrental.com/theme/images/about1.jpg" />
       
        <img className="src" src="https://www.chandigarhcarsrental.com/theme/images/about.jpg" />
      </div>
    </div>
    </div>
  );
};
export default About;
