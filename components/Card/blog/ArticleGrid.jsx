import React, { useState } from "react";
import articles from "../../../data/articles.js";
import ArticleCard from "./ArticleCard";

const ArticleGrid = ({ selectedCategory, searchQuery = "" }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8; // Number of articles per page

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((article) => {
    // Category filter
    const categoryMatch =
      selectedCategory === "All" ||
      (article.categoryLinks &&
        article.categoryLinks.some((link) =>
          link.toLowerCase().includes(selectedCategory.toLowerCase())
        ));

    // Search filter
    const searchMatch =
      !searchQuery ||
      (article.title &&
        article.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (article.content &&
        article.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (article.categoryLinks &&
        article.categoryLinks.some((link) =>
          link.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    return categoryMatch && searchMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Maximum number of visible page buttons

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <section className="space-y-10 lg:w-[1174px] lg:-ml-6 mt-10">
        {/* First row: 2 cards */}
        {currentArticles.length > 0 ? (
          <>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentArticles.slice(0, 2).map((article, index) => (
                  <ArticleCard
                    key={`first-${article.id}-${index}`}
                    {...article}
                    fullImage={true}
                  />
                ))}
              </div>
            </div>

            {/* Remaining rows: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.slice(2).map((article, index) => (
                <ArticleCard key={`rest-${article.id}-${index}`} {...article} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No articles found.</p>
        )}
      </section>

      {/* Pagination controls */}
      {filteredArticles.length > articlesPerPage && (
        <div className="flex justify-center items-center py-6">
          <nav className="inline-flex space-x-2" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>

            {getPageNumbers().map((pageNumber, index) =>
              pageNumber === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-4 py-2 text-sm text-gray-700"
                >
                  ...
                </span>
              ) : (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`px-4 py-2 text-sm border border-gray-300 rounded-md ${
                    currentPage === pageNumber
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                  aria-current={currentPage === pageNumber ? "page" : undefined}
                >
                  {pageNumber}
                </button>
              )
            )}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default ArticleGrid;
