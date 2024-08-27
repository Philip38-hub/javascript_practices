var getacceleration = (obj) => {
   if (typeof obj.f === 'number' && typeof obj.m === 'number' || obj.m !== 0) {
    return obj.f/obj.m;
   } else if (typeof obj.Δv === 'number' && typeof obj.Δt === 'number' || obj.t !== 0) {
    return obj.Δv/obj.Δt;
   } else if (typeof obj.t === 'number' && typeof obj.d === 'number' || obj.d !== 0) {
    return obj.d*obj.d/obj.t*obj.t;
   } else {
    return 'impossible'
   }
}