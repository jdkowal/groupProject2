

function getCoupon(userId){
    const response = fetch(`api/coupon/${userId}`, {
        method: 'GET',
    });

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('coupon not found')
    }
}