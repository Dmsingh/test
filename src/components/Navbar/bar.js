import React from 'react'
import './bar.css';
import Search from './search/search'
import { BsPlusLg } from 'react-icons/bs';
function Navbar() {

    
    return (
        <div>
            <h1 style={{marginLeft:12}}>Products</h1>

            <div className="nav-item">
            <div className="search-div">
               <Search/>
            </div>
            <div className="qr-div">
                 <img className="bar-code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACmCAMAAAC8yPlOAAAAb1BMVEX///8AAABMTEyrq6s3Nzf7+/v39/fw8PCLi4vIyMidnZ0oKCgWFhbm5ubb29vu7u6WlpbV1dWAgIBxcXGlpaUxMTE+Pj55eXm7u7tbW1tsbGyHh4e1tbXQ0NCRkZFgYGAZGRkYGBggICAODg5UVFSifG7eAAAC7klEQVR4nO3Ry3riMAyGYRlwwqEEGkI4TYEC93+NlWU7AcozXczMar5/QaLYieQXEfJHKauqEqkWeltUPj2sYrwsqlQUuqqZp62iK3dFV5b2mXBr8fqermk5n3/fWFb5eepntwsrwyTdO0WVp7Xv3Y38NEncGN6zkWO09F2DebiUdpi7o8aDzisb6/dpnLt6uRz09sPlAS/OspCjE7HbiWzDZaDl0rYcnZt1hcjBuZN41+jt1lbiqO5df2st15v0qHaulcI2/nJeVmFrEdu5sD6rrQyT7Nv0zodLNqXb6u9URxa5jtPq0rlbmmTiwoFvOxt6ktbbvc6RG7Th0thhzMbb80oOF1trfvQa6um8rEPz985rnb2W2uItek3CJUwyzVOORD6n6Q3l2/deowevg5Zt3cMOVGRoXiKb0ZPXaNx5rQavvRr7Q2bHtDoNf5Vcp53X7vTgNVhlrzctwnXYe0nyGq9tbfiPvc544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YUXXnjhhRdeeOGFF1544YXXN6/P/85Lmzsv54ONlb3O2evo0hcn1kKPKm6ZgS5dYQyn3uvy4FXr6dab9Kh2rlWRxry8rGZPXpe689q3r70U6KpA47Sq/9wtTRK9brsHr3afvbRBGy5N7+WT1+Fsa82PXr4sCp24sHHyw8JShtVYlN42lrpNb/v3UhHKbi2upAPGr+UGobjf2DXO/eKDsr+9+4zd9A2Kl637ft1o8YuW0D4fJn2zjI2f3iGEEEIIIYQQQgghhBBCCCGEkL+eL+2Cc7nmhLG3AAAAAElFTkSuQmCC" alt="qrcode"/>
            </div>

            <div className="add-button">
               <BsPlusLg />
            </div>
            <div className="result-div">
           <h5 style={{position: "relative",top:-11}}>
           16 Results
           </h5>

            </div>
            </div>
            
        </div>
    )
}

export default Navbar
