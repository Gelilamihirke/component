import React from 'react';
import { portfolioProjects } from '../../data/Work';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = portfolioProjects[projectId];
  const projectIds = Object.keys(portfolioProjects);
  const currentIndex = projectIds.indexOf(projectId);

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
    navigate(`/work/${projectIds[prevIndex]}`, { replace: true });
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % projectIds.length;
    navigate(`/work/${projectIds[nextIndex]}`, { replace: true });
  };

  if (!project) return <div>Project not found</div>;

  return (
    <div
      onClick={() => navigate(-1)}
      className="fixed inset-0 bg-black/60 z-50 overflow-y-auto"
    >
      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); navigate(-1); }}
        className="fixed top-14 right-11 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white/50 text-2xl transition-all z-10"
        aria-label="Close"
      >
        <FaTimes className="hover:text-primary" />
      </button>

      {/* Left Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        className="fixed left-7 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white/50 text-2xl transition-all z-10"
        aria-label="Previous project"
      >
        <FaChevronLeft className="ml-1 hover:text-primary" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="fixed right-10 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white/50 text-2xl transition-all z-10"
        aria-label="Next project"
      >
        <FaChevronRight className="hover:text-primary" />
      </button>

      {/* Centered Content */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div onClick={(e) => e.stopPropagation()} className="w-[1338px] mt-6 bg-white rounded-lg">
          <div className="items-center justify-center p-8">
            <h1 className="text-center font-extrabold mt-15 text-[56px] mb-4">{project?.title}</h1>
            <p className="text-center text-[20px] mb-8">{project?.subtitle}</p>

            {project?.buttons && (
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {project.buttons.map((buttonText, index) => (
                  <button key={index} className="border border-gray-300 rounded px-4 py-2 text-[13px] hover:bg-gray-50">
                    {buttonText}
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 justify-center mb-48">
              {project?.image?.src && (
                <img alt={project?.image?.alt || project.title} className="w-[665.98px] rounded" src={project.image.src} />
              )}
              <ul className="list-none space-y-4 text-lg max-w-md">
                {project?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-black bg-black rounded-full p-1.5">
                      <FaCheck className="text-white text-sm" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-center font-bold text-[40px] mb-6">Project Scope</h2>
              <p className="text-center text-[20px] leading-relaxed max-w-3xl mx-auto">
                {project?.scope || 'No project scope available.'}
              </p>
            </div>

            {project?.proj?.src && (
              <div className="w-[994px] flex lg:ml-35 items-center justify-center mb-12">
                <img src={project.proj.src} alt={project.proj.alt || project.title} className="w-full h-auto rounded" />
              </div>
            )}

            <div className="bg-[#EDEDED80] w-[1000px] ml-35 justify-center rounded-lg mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-50">
                {/* Text Content */}
                <section className="max-w-xl">
                  <h2 className="font-bold text-[40px] mb-6">Final Result</h2>
                  <p className="mb-6 text-[20px] font-normal leading-relaxed text-black">
                    {project?.finalResult?.description || "The project was successfully completed with all requirements met."}
                  </p>

                  {project?.finalResult?.features && (
                    <ul className="space-y-4 mb-10 text-black text-[18px] leading-relaxed">
                      {project.finalResult.features.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs mt-1">
                            <FaCheck />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project?.finalResult?.testimonial && (
                    <>
                      <h3 className="font-bold text-[24px] mb-3">And the client was happy:</h3>
                      <p className="italic text-[16px] leading-relaxed mb-8 text-black">{project.finalResult.testimonial}</p>
                    </>
                  )}

                  {project?.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-black text-white font-bold text-[16px] uppercase px-5 py-3 rounded-md hover:bg-gray-900 transition"
                    >
                      Check it out live
                    </a>
                  )}
                </section>

                {/* Sticky Image */}
                <section className="hidden lg:block sticky top-20 self-start">
                  <img
                    alt={project?.finalResult?.image?.alt || `${project.title} final result`}
                    className="w-[447px] h-auto rounded"
                    src={project?.finalResult?.image?.src || "https://placehold.co/600x500?text=Final+Result"}
                  />
                </section>
              </div>
            </div>

            <div className="bg-primary-60 mt-8 py-8 w-[1000px] ml-35 flex flex-col justify-center items-center mb-10 px-4 text-center">
              <h1 className="font-extrabold text-[40px] mb-4">Have a similar project?</h1>
              <p className="text-[20px] mb-6 max-w-xl">
                We are here to help. Let's discuss your needs and get started.
              </p>
              <button className="bg-black text-white font-bold py-3 px-6 rounded-md uppercase hover:bg-primary transition-colors">
                <Link to="/quote">GET A QUOTE</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
