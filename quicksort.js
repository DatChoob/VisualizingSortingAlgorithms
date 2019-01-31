// import Step from './Step.js';
class Quicksort {

    constructor() {
        this.stepsTaken = [];
    }

    sort(beginning_array) {
        this._sort(beginning_array, 0, beginning_array.length - 1);
        return this.stepsTaken;
    }

    _sort(arr, low, high) {
        if (low < high) {
            /* pi is partitioning index, arr[pi] is  
              now at right place */
            let pi = this._partition(arr, low, high);

            // Recursively sort elements before 
            // partition and after partition 
            this._sort(arr, low, pi - 1);
            this._sort(arr, pi + 1, high);
        }
    }

    _partition(arr, low, high) {
        let pivot = arr[high];
        let i = (low - 1); // index of smaller element 
        for (let j = low; j < high; j++) {
            // If current element is smaller than or 
            // equal to pivot 
            if (arr[j] <= pivot) {
                i++;
                // swap arr[i] and arr[j] 
                this._swap(arr, i, j);

            }
        }

        // swap arr[i+1] and arr[high] (or pivot) 
        this._swap(arr, i + 1, high);

        return i + 1;
    }

    _swap(array, indexA, indexB) {
        let temp = array[indexB];
        array[indexB] = array[indexA];
        array[indexA] = temp;
        this.stepsTaken.push(new Step(indexA, indexB));
    }
}


