#include <iostream>
#include <vector>
#include <queue>

long long mergeChocolates(int N, std::vector<int>& chocolates) {
    std::priority_queue<long long, std::vector<long long>, std::greater<long long>> minHeap(chocolates.begin(), chocolates.end());
    long long totalCost = 0;

    while (minHeap.size() > 1) {
        long long first = minHeap.top();
        minHeap.pop();
        long long second = minHeap.top();
        minHeap.pop();
        long long merged = first + second;
        totalCost += merged;
        minHeap.push(merged);
    }

    return totalCost;
}

int main() {
    int N;
    std::cin >> N;
    std::vector<int> chocolates(N);
    for (int i = 0; i < N; ++i) {
        std::cin >> chocolates[i];
    }
    std::cout << mergeChocolates(N, chocolates) << std::endl;
    return 0;
}
