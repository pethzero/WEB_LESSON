this.filter_costcenter = resp.cost_center
    ? resp.cost_center.map(item => {
        // แยก value ออกจากสตริง
        const valueMatch = item.value.match(/^\d+/);
        // ตรวจสอบว่ามีการจับคู่หรือไม่
        const value = valueMatch ? valueMatch[0] : null;
        return { value };
      })
    : [];