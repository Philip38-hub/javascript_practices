const getAcceleration = ({ f, m, Δv, Δt, d, t }) => {
    if (Δv !== undefined && Δt !== undefined) {
        // a = Δv / Δt
        return Δv / Δt;
    } else if (f !== undefined && m !== undefined) {
        // a = F / m
        return f / m;
    } else if (d !== undefined && t !== undefined) {
        // a = 2d / t^2
        return (2 * d) / (t ** 2);
    } else {
        // Not enough information to calculate acceleration
        return "impossible";
    }
};