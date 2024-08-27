var getacceleration = (obj) => {
   if (obj.f !== undefined && typeof obj.m !== undefined || obj.m !== 0) {
    return obj.f/obj.m;
   } else if (typeof obj.Δv !== undefined && typeof obj.Δt !== undefined || obj.t !== 0) {
    return obj.Δv/obj.Δt;
   } else if (typeof obj.t !== undefined && typeof obj.d !== undefined || obj.d !== 0) {
    return obj.d*obj.d/obj.t*obj.t;
   } else {
    return 'impossible'
   }
}