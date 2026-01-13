function intersect(nums1: number[], nums2: number[]): number[] {
        const map = new Map<number, number>();
        const result:number[] = [];
        for (let i = 0; i < nums1.length; i++) {
            const num = nums1[i];
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        for (let i = 0; i < nums2.length; i++) {
            const num = nums2[i];
            if (map.has(num) && map.get(num)! > 0) {
                result.push(num);
                map.set(num, map.get(num)! - 1);
            }
        }
        return result;
    }