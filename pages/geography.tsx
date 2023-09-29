'use client';
import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import us from '../utils/us.json';
import SubjectModal from '../components/SubjectModal';
import GeographyCard from '../components/GeographyCard';
import { getStateId } from 'utils/stateToId';
import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs';

const Page = () => {
    const ref = useRef<SVGSVGElement>(null);
    const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);
    const [location, setLocation] = useState<any>(null);

    // const fetchStateData = async (state: string = '02') => {
    //     const res = await fetch(`http://localhost:8080/geography?state=${getStateId(state).toString()}`)
    //     const data = await res.json();
    //     return data;
    // };

    // const queryClient = useQueryClient()

    // const { data: stateData, isSuccess } = useQuery({queryKey: ['location', location], queryFn: ({queryKey}) => fetchStateData(queryKey[1])});

    // const mutation = useMutation({
    //   mutationFn: ({queryKey}) => fetchStateData(queryKey[1]),
    //   onSuccess: () => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries({ queryKey: ['geography', location] })
    //   },
    // })
  
    const onStateSelect = (location: any) => {
        setLocation(location);
        setIsCardModalOpen(true);
        // mutation.mutate({
        //   state: location
        // })
    }

    const onModalClose = () => {
        setLocation(null);
        setIsCardModalOpen(false);
    }


  useEffect(() => {
    if (ref.current) {
      const { innerWidth } = window;
        const screenHeight = innerWidth * 0.6;
      const width = innerWidth;
      const height = screenHeight;

      const zoom = d3.zoom()
          .scaleExtent([1, 8])
          .on("zoom", zoomed);

      const svg = d3.select(ref.current)
          .attr("viewBox", [0, 0, width, height].join(' '))
          .attr("width", width)
          .attr("height", height)
          .attr("style", "max-width: 100%; height: auto;")
          .on("click", reset);

      const path = d3.geoPath();

      const g = svg.append("g");

      const featureCollection = topojson.feature(us as any, us.objects.states as any) as any as GeoJSON.FeatureCollection;

      const states = g.append("g")
          .attr("fill", "#444")
          .attr("cursor", "pointer")
        .selectAll("path")
        .data(featureCollection.features)
        .join("path")
          .on("click", clicked)
          .attr("d", path as any);
      
      states.append("title")
          .text(d => (d.properties as unknown as any).name);

      g.append("path")
          .attr("fill", "none")
          .attr("stroke", "white")
          .attr("stroke-linejoin", "round")
          .attr("d", path(topojson.mesh(us as any, us.objects.states as any, (a, b) => a !== b)));

      svg.call(zoom as any);

      //@ts-ignore
      function reset() {
        states.transition().style("fill", null);
        svg.transition().duration(750).call(
          zoom.transform as any,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()!).invert([width / 2, height / 2])
        );
      }

      //@ts-ignore
      function clicked(event: MouseEvent, d: GeoJSON.Feature) {
        onStateSelect(d.properties?.name)
        const currentElement = d3.select(event.currentTarget as unknown as string); // Here we get the current DOM element
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();
        states.transition().style("fill", null);
        currentElement.transition().style("fill", "red"); // use currentElement instead of this
        svg.transition().duration(750).call(
          zoom.transform as any,
          d3.zoomIdentity
            .translate(width / 3, height / 2)
            .scale(Math.min(8, 0.5 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(event, svg.node()!)
        );
      }

      //@ts-ignore
      function zoomed(event: d3.D3ZoomEvent<any, any>) {
        const {transform} = event;
        g.attr("transform", transform.toString());
        g.attr("stroke-width", 1 / transform.k);
      }

      // Cleanup
      return () => {
        svg.on("click", null).on("zoom", null);
        states.on("click", null);
      };
    }
  }, [us]);

  const stateData = 'toot'
  const isSuccess = true;

  return (
    <div>
        <SignedIn>
            <svg ref={ref}></svg>
            {isCardModalOpen && location !== null &&
                <GeographyCard location={location} closeModal={onModalClose} stateData={stateData} queryDone={isSuccess}/>
            }
        </SignedIn>
        <SignedOut>
            <SignIn />
        </SignedOut>
      
    </div>
  );
};

export default Page;
