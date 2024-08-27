var getacceleration = (obj) => {
   if (obj.f !== undefined && obj.m !== undefined || obj.m !== 0) {
    return obj.f/obj.m;
   } else if (obj.Δv !== undefined && obj.Δt !== undefined || obj.t !== 0) {
    return obj.Δv/obj.Δt;
   } else if (obj.t !== undefined && obj.d !== undefined || obj.d !== 0) {
    return obj.d*obj.d/obj.t*obj.t;
   } else {
    return 'impossible'
   }
}